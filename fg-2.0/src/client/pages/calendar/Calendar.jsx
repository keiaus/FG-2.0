import Calendar from "react-calendar";
import Layout from "../../../components/Layout/Layout";
import axios from "axios";
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from "react";

/**
 * This method creates the calendar page actions
 * @returns CalendarPage screen
 */

const CalendarPage = () => {
    const [userId, setUserId] = useState(null);
    const [dates, setDates] = useState(new Date());
    const [newGroup, setNewGroup] = useState(false);
    const [leaveGroup, setLeaveGroup] = useState(false);
    const [joinGroup, setJoinGroup] = useState(false);
    const [viewGroup, setViewGroup] = useState(false);
    const [groupId, setGroupId] = useState("");
    const [groupName, setGroupName] = useState("");
    const [memberDates, setMemberDates] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const uid = localStorage.getItem("userId");
        if (!uid) { alert("Missing username"); return; }
        setUserId(uid);
    }, []);

    const rangesOverlap = (a, b) => {
        const aStart = new Date(Array.isArray(a) ? a[0] : a);
        const aEnd = new Date(Array.isArray(a) ? a[1] : a);
        const bStart = new Date(Array.isArray(b) ? b[0] : b);
        const bEnd = new Date(Array.isArray(b) ? b[1] : b);
        return aStart <= bEnd && bStart <= aEnd;
    }

    const getMemberColor = (i) => {
        if (memberDates.length <= 1) return "green";
        const others = memberDates.filter((_, j) => j !== i);
        const ratio = others.filter(r => rangesOverlap(memberDates[i], r)).length / others.length;
        if (ratio >= 0.6) return "green";
        if (ratio >= 0.3) return "yellow";
        return "red";
    }

    const getTileClass = ({ date }) => {
        if (memberDates.length === 0) return null;
        const count = memberDates.filter(range => {
            const start = new Date(range[0]);
            const end = new Date(range[1]);
            return date >= start && date <= end;
        }).length;
        const ratio = count / memberDates.length;
        if (ratio >= 0.6) return "tile-green";
        if (ratio >= 0.3) return "tile-yellow";
        return "tile-red";
    }

    const fetchMemberDates = (id) => {
        axios.get(`/api/calendar?calendarId=${id}`, { withCredentials: true })
            .then(r => {
                if (r.data?.data) {
                    setMemberDates(r.data.data.map(d => JSON.parse(d.dateRange)));
                    setMembers(r.data.data.map(d => d.userId));
                }
            })
            .catch(err => console.error("error fetching dates: ", err.response?.data));
    }

    const handleCreate = (event) => {
        event.preventDefault();
        setNewGroup(true);
    }

    const handleJoin = (event) => {
        event.preventDefault();
        setJoinGroup(true);
    }

    const handleLeave = (event) => {
        event.preventDefault();
        setLeaveGroup(true);
    }

    const handleView = (event) => {
        event.preventDefault();
        setViewGroup(true);
    }

    const onSubmitView = (event) => {
        event.preventDefault();
        fetchMemberDates(groupId);
    }

    const onSubmitCreate = (event) => {
        event.preventDefault();
        axios.post("/api/newGroup", { groupName }, { withCredentials: true })
            .then(response => {
                const id = response.data.groupId;
                return axios.post("/api/calendar", { calendarId: id, userId, dateRange: dates }, { withCredentials: true })
                    .then(() => {
                        setGroupId(id);
                        alert(`Group created! Share this ID with your group: ${id}`);
                    });
            })
            .catch(err => console.error("error: ", err.response?.data));
    }

    const onSubmitJoin = (event) => {
        event.preventDefault();
        axios.post("/api/calendar", { calendarId: groupId, userId, dateRange: dates }, { withCredentials: true })
            .then(() => {
                alert("Joined group successfully");
                fetchMemberDates(groupId);
            })
            .catch(err => console.error("error: ", err.response?.data));
    }

    const onSubmitLeave = (event) => {
        event.preventDefault();
        axios.post("/api/calendar/leave", { calendarId: groupId, userId }, { withCredentials: true })
            .then(() => {
                alert("Left group successfully");
                setLeaveGroup(false);
                setGroupId("");
            })
            .catch(err => console.error("error: ", err.response?.data));
    }

    const calendarPicker = (onSubmit) => (
        <div id="calendar-div">
            <Calendar
                onChange={setDates}
                value={dates}
                selectRange={true}
                tileClassName={getTileClass}
            />
            <br />
            {dates.length > 0 ? (
                <p className="text-container">
                    <span className="bold">Start:</span>{' '}
                    {dates[0].toDateString()}
                    &nbsp;|&nbsp;
                    <span className="bold">End:</span> {dates[1].toDateString()}
                </p>
            ) : (
                <p className="text-container">
                    <span className="bold">Today's Date:</span>{' '}
                    {dates.toDateString()}
                </p>
            )}
            <form onSubmit={onSubmit}>
                <input type="submit" id="calendar-submit" value={"Confirm"} />
            </form>
        </div>
    );

    if (newGroup) {
        return (
            <>
                <title>Calendar | FG-2.0</title>
                <header><h1 id="calendar-title">Create Group</h1></header>
                <div>
                    <label id="groupNameLabel" htmlFor="groupName">Group Name: </label>
                    <input type="text" id="groupName" value={groupName} onChange={e => setGroupName(e.target.value)} required />
                </div>
                {calendarPicker(onSubmitCreate)}
            </>
        );
    }

    if (joinGroup) {
        return (
            <>
                <title>Calendar | FG-2.0</title>
                <header><h1 id="calendar-title">Join Group</h1></header>
                <div>
                    <label id="groupIdLabel" htmlFor="groupId">Group ID: </label>
                    <input type="text" id="groupId" value={groupId} onChange={e => setGroupId(e.target.value)} title="Enter the Group ID shared by the group creator to join their trip" />
                    <p id="groupId-help">Enter the Group ID shared by the group creator</p>
                </div>
                {calendarPicker(onSubmitJoin)}
            </>
        );
    }

    if (viewGroup) {
        return (
            <>
                <title>Calendar | FG-2.0</title>
                <header><h1 id="calendar-title">View Group</h1></header>
                <div>
                    <label id="groupIdLabel" htmlFor="groupId">Group ID: </label>
                    <input type="text" id="groupId" value={groupId} onChange={e => setGroupId(e.target.value)} />
                    <p id="groupId-help">Enter the Group ID to view member availability</p>
                    <form onSubmit={onSubmitView}>
                        <input type="submit" id="view-submit" value={"View"} />
                    </form>
                </div>
                {memberDates.length > 0 && (
                    <div id="view-group-layout">
                        <div id="calendar-div">
                            <Calendar
                                value={dates}
                                tileClassName={getTileClass}
                            />
                            <div id="legend">
                                <span className="legend-dot green" /> <span className="legend-label">Most can go</span>
                                <span className="legend-dot yellow" /> <span className="legend-label">Some can go</span>
                                <span className="legend-dot red" /> <span className="legend-label">Few can go</span>
                            </div>
                        </div>
                        <div id="member-list">
                            <h3 id="member-list-title">Members ({members.length})</h3>
                            <ul id="member-ul">
                                {members.map((m, i) => (
                                    <li key={i} className="member-item">
                                        <span className={`legend-dot ${getMemberColor(i)}`} />
                                        👤 {m}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </>
        );
    }

    if (leaveGroup) {
        return (
            <>
                <title>Calendar | FG-2.0</title>
                <header><h1 id="calendar-title">Leave Group</h1></header>
                <div id="leave-confirm-div">
                    <label htmlFor="leaveId">Group ID: </label>
                    <input type="text" id="leaveId" value={groupId} onChange={e => setGroupId(e.target.value)} />
                    <form onSubmit={onSubmitLeave}>
                        <input type="submit" id="leave-submit" value={"Leave Group"} />
                    </form>
                </div>
            </>
        );
    }

    return (
        <>
            <title>Calendar | FG-2.0</title>
            <div id="group-div">
                <div id="create-div">
                    <button id="create-grp-btn" onClick={handleCreate}> Create Group </button>
                </div>
                <div id="join-div">
                    <button id="join-grp-btn" onClick={handleJoin}> Join Group </button>
                </div>
                <div id="leave-div">
                    <button id="leave-grp-btn" onClick={handleLeave}> Leave Group </button>
                </div>
                <div id="view-div">
                    <button id="view-grp-btn" onClick={handleView}> View Group </button>
                </div>
            </div>
        </>
    );
}

export default CalendarPage;

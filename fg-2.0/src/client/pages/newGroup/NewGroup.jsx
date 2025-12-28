import Layout from "../../../components/Layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

/**
 * This method creates a new group 
 */
const NewGroup = () => {
    const [groupName, setGroupName] = useState();

    /**
     * This method clears the form data after the user successfully enters the group name
     */
    const clearFormData = async () => {
        setGroupName("");
    }

    const onSubmitForm = async (event) => {
        event.preventDefault();

        if (groupName === null) {
            alert("Please enter a group name");
        }

        else {
            let groupData = {
                "groupName": groupName
            }

            axios.post("/api/newGroup", {
                groupData
            })

            .then((response) => {
                if (response.status === 200) {
                    if (response?.data?.errors) {
                        for (const [key, value] of Object.entries(response?.data?.errors)) {
                            return alert(`${value?.message}`);
                        }
                    }

                    else {
                        alert("Group created");
                        clearFormData();
                    }
                }

                else {
                    return alert("Issue with creating new group")
                }
            })
            .catch((error) => {
                console.error("error: ", error);
            })
        }
    }

    return (
        <>
            <div>
                <title>New Group | FG-2.0</title>
                {/* <Layout /> */}
                <header>
                    <h1 id="new-group-title">Create a New Group</h1>
                </header>
                <div id="new-group-div">
                    <form onSubmit={onSubmitForm}>
                        <label htmlFor="groupName">Enter a name for your group: </label>
                        <input type="text" id="groupName" required value={groupName} onChange={event => setGroupName(event.target.value)}></input><br />
                    </form>

                </div>
            </div>
        </>
    )
}

export default NewGroup;
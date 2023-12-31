import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div id="layout-component">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/calendar">Calendar</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/documentation">Documentation</Link>
                        </li>
                        <li>
                            <Link to="/sform1">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/lform">Log In</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Layout;
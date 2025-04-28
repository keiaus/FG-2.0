import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div id="layout-component">
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
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
                            <Link to="/signup">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/login">Log In</Link>
                        </li>
                        {/* <li>
                            <Link to="/testform">Test Page</Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Layout;
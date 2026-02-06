import { Outlet, Link } from "react-router-dom";

const LoggedInLayout = () => {
    return (
        <>
            <div id="layout-component">
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/docs">Docs</Link>
                        </li>
                        <li>
                            <Link to="/logout">Log out</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default LoggedInLayout;
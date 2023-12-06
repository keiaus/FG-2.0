import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/documentation">Documentation</Link>
                    </li>
                    <li>
                        <Link to="/signupform">Signup</Link>
                    </li>
                    <li>
                        <Link to="/loginform">Login</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;
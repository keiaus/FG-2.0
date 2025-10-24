import Layout from "../../../components/Layout/Layout";
import Alert from '@mui/material/Alert';


/**
 * TODO: Fix alert message when user logs out successfully
 * @returns HomePage screen
 */
const HomePage = () => {
    // const items = {...localStorage};
    // console.log("localStorage data ==> ", items);
    
    if (localStorage.getItem("loggedOut")) {
        return (
            <>
                {/* <Alert variant="filled" severity="success">
                    Logged out successfully
                </Alert> */}

                <Layout />
                <div id="home">
                    <title>Home | FG-2.0</title>
                    <header>
                        <h1 id="fg-header">Welcome to FG 2.0</h1>
                    </header>
                </div>
            </>
        )
    }
    return (
        <>
            <Layout />
            <div id="home">
                <title>Home | FG-2.0</title>
                <header>
                    <h1 id="fg-header">Welcome to FG 2.0</h1>
                </header>
            </div>
        </>
    )
}

export default HomePage;
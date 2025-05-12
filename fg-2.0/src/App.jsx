import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalendarPage from './client/pages/calendar/Calendar.jsx';
import HomePage from './client/pages/home/Home.jsx';
import AboutPage from './client/pages/about/About.jsx';
import DocumentationPage from './client/pages/documentation/Documentation.jsx';
import SignupForm from "./client/pages/signup/SignupForm.jsx"
import LoginForm from './client/pages/login/LoginForm.jsx';
import useToken from './components/App/useToken.js';
import './App.css';

const App = () => {
  const { token, setToken } = useToken();

  /**
   * TODO: Fix login route after token initialization
   */
  if (!token) {
    console.log("in if statement");

    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/calendar" element={<CalendarPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/documentation" element={<DocumentationPage />}></Route>
            <Route path="/signup" element={<SignupForm />}></Route>
            <Route path="/login" element={<LoginForm />} setToken={setToken} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/calendar" element={<CalendarPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/documentation" element={<DocumentationPage />}></Route>
          <Route path="/signup" element={<SignupForm />}></Route>
          {/* <Route path="/login" element={<LoginForm />} ></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
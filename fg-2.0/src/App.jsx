import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalendarPage from './client/pages/calendar/Calendar.jsx';
import HomePage from './client/pages/home/Home.jsx';
import AboutPage from './client/pages/about/About.jsx';
import DocumentationPage from './client/pages/documentation/Documentation.jsx';
import SignupForm from "./client/pages/signup/SignupForm.jsx"
import LoginForm from './client/pages/login/LoginForm.jsx';
import TestForm from './client/pages/test123/TestForm.jsx';
import './App.css';

const App = () => {
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
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/testform" element={<TestForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
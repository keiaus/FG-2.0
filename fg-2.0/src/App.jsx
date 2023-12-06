import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx'
import CalendarPage from './client/calendar/calendarPage/CalendarPage.jsx'
import HomePage from '../../client/pages/home/homePage/HomePage';
import AboutPage from '../../client/pages/about/aboutPage/AboutPage';
import DocumentationPage from './client/documentation/documentationPage/DocumentationPage.jsx';
import SignupFormOne from '../../client/pages/signup/signupFormOne/SignupFormOne';
import LoginForm from '../../client/pages/login/loginForm/LoginForm';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/calendarPage" element={<CalendarPage/>}></Route>
          <Route path="/aboutPage" element={<AboutPage/>}></Route>
          <Route path="/documentationPage" element={<DocumentationPage/>}></Route>
          <Route path="/signupFormOne"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

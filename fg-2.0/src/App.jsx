import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalendarPage from './client/pages/calendar/calendarPage/CalendarPage.jsx';
import HomePage from './client/pages/home/homePage/HomePage.jsx';
import AboutPage from './client/pages/about/aboutPage/AboutPage.jsx';
import DocumentationPage from './client/pages/documentation/documentationPage/DocumentationPage.jsx';
import SForm from "./client/pages/signup/SForm.jsx"
import LForm from './client/pages/login/LForm.jsx';
// import useToken from './components/App/useToken.js';
import './App.css'

// const setToken = (userToken) => {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// const getToken = () => {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  // const token = getToken();

  // if (!token) {
  //   return <LForm setToken={setToken} />
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/calendar" element={<CalendarPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/documentation" element={<DocumentationPage />}></Route>
          <Route path="/sform" element={<SForm />}></Route>
          <Route path="/lform" element={<LForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
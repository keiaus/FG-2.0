import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalendarPage from './client/pages/calendar/calendarPage/CalendarPage.jsx';
import HomePage from './client/pages/home/homePage/HomePage.jsx';
import AboutPage from './client/pages/about/aboutPage/AboutPage.jsx';
import DocumentationPage from './client/pages/documentation/documentationPage/DocumentationPage.jsx';
import SForm1 from './client/pages/signup/sForm1/SForm1.jsx';
import LForm from './client/pages/login/LForm.jsx';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
          <Route path="/calendar" element={<CalendarPage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/documentation" element={<DocumentationPage/>}></Route>
          <Route path="/sform1" element={<SForm1/>}></Route>
          <Route path="/lform" element={<LForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

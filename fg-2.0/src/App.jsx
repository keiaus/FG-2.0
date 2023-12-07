import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CalendarPage from './client/calendar/calendarPage/CalendarPage.jsx'
import HomePage from './client/home/homePage/HomePage.jsx';
import AboutPage from './client/about/aboutPage/AboutPage.jsx';
import DocumentationPage from './client/documentation/documentationPage/DocumentationPage.jsx';
import SForm1 from './client/signup/sForm1/sForm1.jsx';
import LForm from './client/login/LForm.jsx';
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

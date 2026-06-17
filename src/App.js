import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Bedrifter from './pages/Bedrifter';
import Skytjenester from './pages/Skytjenester';
import Sikkerhet from './pages/Sikkerhet';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <MyNavbar />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/anvendt-teknologi" element={<Bedrifter />} />
      <Route path="/skytjenester" element={<Skytjenester />} />
      <Route path="/sikkerhet" element={<Sikkerhet />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;

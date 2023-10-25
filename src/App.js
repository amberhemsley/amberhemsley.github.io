import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Welcome from './pages';
import Home from './pages/home';
import Experience from './pages/experience';
import Misc from './pages/misc';
import Contact from './pages/contact';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' exact element={<Welcome />} />
          <Route path='/home' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/misc' element={<Misc />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;

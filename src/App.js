import './App.css';
import TopBar from './components/TopBar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/home';
import Experience from './pages/experience';
import Misc from './pages/misc';
import Contact from './pages/contact';

function App() {
  return (
      <Router basename="/amberhemsley.github.io">
        <TopBar />
        <Routes>
          <Route exact path='/' exact element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/misc' element={<Misc />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;

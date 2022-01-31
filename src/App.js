import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import About from './pages/About/About';

import Index from './pages/Index/Index';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='/about-me' element={<About />} />
          <Route exact path='/my-projects' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

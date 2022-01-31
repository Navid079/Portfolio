import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import About from './pages/About/About';

import Index from './pages/Index/Index';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='/about-me' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

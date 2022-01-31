import { useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import Index from './pages/Index/Index';
import Projects from './pages/Projects/Projects';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div className='App'>
      <Router>
        <Wrapper>
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/about-me' element={<About />} />
            <Route exact path='/my-projects' element={<Projects />} />
            <Route exact path='/contact-me' element={<Contact />} />
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;

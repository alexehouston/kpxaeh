import { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import Dates from '../Dates/Dates';
import Contact from '../Contact/Contact';
import 'animate.css';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="animate__animated animate__fadeIn animate__slow">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="App">
        {currentPage === 'dates' ? ( <Dates isSmallScreen={isSmallScreen} /> ) : currentPage === 'contact' ? ( <Contact /> ) : ( <><h1 className="Home animate__animated animate__fadeInUp">Book with<br /><span>Kristen Pennington</span><br />& <span>Alex E. Houston</span></h1></> )}
      </div>
    </div>
  );
}

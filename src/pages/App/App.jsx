import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import Dates from '../Dates/Dates';
import Contact from '../Contact/Contact';
import 'animate.css';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'dates' ? ( <Dates /> ) : currentPage === 'contact' ? ( <Contact /> ) : ( <><h1 className="Home">Book with<br />Kristen Pennington<br /> & Alex E. Houston</h1></> )}
    </>
  );
}

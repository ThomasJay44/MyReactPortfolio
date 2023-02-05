import { useState } from 'react';
import './App.css';
//import {Nav, About,Contact} from './components'
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState("About")

  return (
    <div>
      < Nav setCurrentPage={setCurrentPage} />
      {currentPage === "About" &&  <About /> }
      {currentPage === "Contact" &&  <Contact />}
      {currentPage === "Page3" && <h1>PAGE 3</h1> }
      {currentPage === "Page4" &&  <h1>PAGE 4</h1> }
    </div>
  );
}

export default App;

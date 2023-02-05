import { useState } from 'react';
import './App.css';

import {About, Contact, Footer, Nav, Portfolio, Resume} from './components'

function App() {
  const [currentPage, setCurrentPage] = useState("About")

  return (
    <>
    <div>
      < Nav setCurrentPage={setCurrentPage} />
      {currentPage === "About" &&  <About /> }
      {currentPage === "Contact" &&  <Contact />}
      {currentPage === "Portfolio" && <Portfolio /> }
      {currentPage === "Resume" &&  <Resume /> }
    </div>
    <br />
    <Footer />
    </>

  );
}

export default App;

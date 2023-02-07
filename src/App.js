import React,  { useState } from "react";
import "./App.css";

import {
  About,
  Contact,
  Footer,
  NavBar,
  Portfolio,
  Resume,
} from "./components";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <>
      <NavBar setCurrentPage={setCurrentPage} />
      {currentPage === "About" && <About setCurrentPage={setCurrentPage}/>}
      {currentPage === "Contact" && <Contact />}
      {currentPage === "Portfolio" && <Portfolio />}
      {currentPage === "Resume" && <Resume />}
      <br></br>
      <Footer />
    </>
  );
}

export default App;

import React, { useState } from "react";
import Nav from "./components/Navigation";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";


function App() {
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    switch (currentPage) {
      case "Resume":
        return <Resume />;
      case "Project":
        return <Project />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <div>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
      <div>
        <section className="hero"></section>
        <section>{renderPage(currentPage)}</section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

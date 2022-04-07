import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("Contact");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <section class="hero"></section>
      <section>
        {renderPage()}
      </section>
    </div>
  );
}

export default App;

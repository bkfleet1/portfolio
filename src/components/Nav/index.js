import React from "react";
import logo from "../../assets/images/logo.png";

function Nav({ currentPage, handlePageChange }) {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Brad Kelley portfolio logo" />
      </a>
      <nav>
        <ul>
          <li className="aboutme">
            <a
              data-testid="About"
              href="About"
              onClick={() => handlePageChange("About")}
              className={currentPage === "About" ? "active" : ""}
            >
              about me
            </a>
          </li>
          <li className="project">
            <a
              data-testid="Project"
              href="Project"
              onClick={() => handlePageChange("Project")}
              className={currentPage === "Project" ? "active" : ""}
            >
              projects
            </a>
          </li>
          <li className="contactme">
            <a
              data-testid="Contact"
              href="Contact"
              onClick={() => handlePageChange("Contact")}
              className={currentPage === "Contact" ? "active" : ""}
            >
              contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

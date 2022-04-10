import React from "react";
import logo from "../../assets/images/logo.png";

function Nav(props) {
  const pages = ["About Me", "Project", "Contact", "Resume"];
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Brad Kelley portfolio logo" />
      </a>
      <nav>
        <ul className="nav nav-row">
          {pages.map((page) => (
            <li className="nav-item" key={page}>
              <button
                onClick={() => props.setCurrentPage(page)}
                className={`nav-b ${
                  props.currentPage === page ? "nav-link active" : "nav-link"
                }`}
              >
                {page.toLowerCase()}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

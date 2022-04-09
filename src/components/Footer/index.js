import React from "react";

function Footer() {
    return (
      <section className="footer-section">
          <div className="footer">
            <div className="f-resources">
              <div className="f-sources">
                <div className="f-1">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="f-2">
                  <a href="mailto: bradkelleytech@gmail.com">
                    bradkelleytech@gmail.com
                  </a>
                </div>
              </div>
  
              <div className="f-sources">
                <div className="f-1">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="f-2">
                  <a
                    href="https://github.com/bkfleet1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    bkfleet1
                  </a>
                </div>
              </div>
  
              <div className="f-sources">
                <div className="f-1">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="f-2">
                  <a
                    href="https://www.linkedin.com/in/bradkelleytech/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    bradkelleytech
                  </a>
                </div>
              </div>
  
              <div className="f-sources">
                <div className="f-1">
                  <i className="fa-brands fa-stack-overflow"></i>
                </div>
                <div className="f-2">
                  <a
                    href="https://stackexchange.com/users/23290198/brad-kelley"
                    target="_blank"
                    rel="noreferrer"
                  >
                    brad-kelley
                  </a>
                </div>
              </div>
            </div>
          </div>
          </section>
)
};

export default Footer
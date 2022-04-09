import React from "react";
import profileImage from "../../assets/images/bkelley.png";
import resumeDoc from "../../assets/documents/resume.pdf";
import Proficiency from "../Proficiency";


function Resume() {

  const renderPage = () => {
    return <Proficiency />};

  return (
    <section className="resume-section">
      <div id="myresume" className="resume-box">
        <div className="resume">
          <div className="header1">Brad Kelley</div>
          <div className="header2">
            Technology Consultant & Solution Developer
          </div>
          <div className="resources">
            <div className="subsources">
              <div className="sub1">
                <i class="fa-solid fa-download"></i>
              </div>
              <div className="sub2">
                <a href={resumeDoc} target="_blank" rel="noreferrer">
                  resume
                </a>
              </div>
            </div>

            <div className="subsources">
              <div className="sub1">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <div className="sub2">
                <a href="mailto: bradkelleytech@gmail.com">
                  bradkelleytech@gmail.com
                </a>
              </div>
            </div>

            <div className="subsources">
              <div className="sub1">
                <i class="fa-brands fa-github"></i>
              </div>
              <div className="sub2">
                <a
                  href="https://github.com/bkfleet1"
                  target="_blank"
                  rel="noreferrer"
                >
                  bkfleet1
                </a>
              </div>
            </div>

            <div className="subsources">
              <div className="sub1">
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <div className="sub2">
                <a
                  href="https://www.linkedin.com/in/bradkelleytech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  bradkelleytech
                </a>
              </div>
            </div>

            <div className="subsources">
              <div className="sub1">
                <i class="fa-brands fa-stack-overflow"></i>
              </div>
              <div className="sub2">
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
        <div>
          <div className="resume">
            <img
              src={`${profileImage}`}
              alt="Brad Kelley"
              className="services-img"
            />
            <p>
              My name is Brad Kelley. I have over 25-years of experience as a
              technology consultant and recently endeavored to become a
              full-stack software developer. In 2002, I co-founded Mercury
              Associates, Inc. (“Mercury”), the largest independent fleet
              consulting and technology services firm in North America. I served
              as the firm’s Senior Vice President and Chief Technology Officer
              (CTO) for 20-years until the company was purchased by CDPQ, a
              leading global private equity platform.
            </p>
            <p>
              In 2020, I departed Mercury to pursue a long-time dream of
              becoming a software developer, creating native web applications
              with intuitive, visually stunning interfaces. I am particularly
              passionate about solutions that harmonize and visualize complex
              business activities in a “single pane of glass” – unifying diverse
              data streams and technologies, such as business systems, IoT and
              geospatial data, artificial intelligence, and analytics.
              Additionally, I am highly interested in skeuomorphic and
              neumorphic UI designs to improve software usability.
            </p>
            <div>
              Below are further details about my employment history, education,
              and skillset.
            </div>
          </div>

          <div className="proficient">
            <div className="header1">technical proficiency</div>
            <div className="proficient-list">
              {renderPage(Proficiency)}
          </div>
          </div>
          
          <div className="employment">
            <div className="header1">employment history</div>
            <div className="jobs">
              <div className="job">
                <div className="header2">Sr. Vice President</div>
                <div className="header3">Fleet Consulting & Cloud Services</div>
                <div className="header3">Mercury Associates, Inc.</div>
                <div className="loc">
                  <div className="time">
                    <i class="fa-regular fa-calendar-days"></i> April 2002 –
                    March 2020
                  </div>
                  <div className="loc1">
                    <i class="fa-solid fa-location-dot"></i> Houston, TX
                  </div>
                </div>
                <div className="all-duties">
                  <div className="duties">
                    <div className="duty1">•</div>
                    <div className="duty2">
                      Company principal; Led fleet technology consulting group &
                      Cloud services.
                    </div>
                  </div>

                  <div className="duties">
                    <div className="duty1">•</div>
                    <div className="duty2">Managed 100,000+ assets.</div>
                  </div>

                  <div className="duties">
                    <div className="duty1">•</div>
                    <div className="duty2">
                      Implemented & integrated market leading fleet & business
                      systems.
                    </div>
                  </div>

                  <div className="duties">
                    <div className="duty1">•</div>
                    <div className="duty2">
                      Developed predictive analytics, APIs, mobile apps, and
                      solutions to facilitate logistics & operational
                      efficiency.
                    </div>
                  </div>
                </div>
              </div>

              <div className="job">
                <div className="header2">Manager</div>
                <div className="header3">Fleet Management Group</div>
                <div className="header3">Maximus, Inc.</div>
                <div className="loc">
                  <div className="time">
                    <i class="fa-regular fa-calendar-days"></i> April 1999 –
                    March 2002
                  </div>
                  <div className="loc1">
                    <i class="fa-solid fa-location-dot"></i> Rockville, MD
                  </div>
                </div>
                <div className="all-duties">
                  <div className="duties">
                    <div className="duty1">•</div>
                    <div className="duty2">
                      Led fleet technology consulting team.
                    </div>
                  </div>

                  <div className="duties">
                    <div className="duty1">•</div>
                    <div className="duty2">Increased annual revenue 25%.</div>
                  </div>
                </div>
              </div>

              <div className="job">
                <div className="header2">Assistant Director</div>
                <div className="header3">Fleet Management Department</div>
                <div className="header3">Sarasota County Government</div>
                <div className="loc">
                  <div className="time">
                    <i class="fa-regular fa-calendar-days"></i> May 1995 – April
                    1999
                  </div>
                  <div className="loc1">
                    <i class="fa-solid fa-location-dot"></i> Sarasota, FL
                  </div>
                </div>
                <div className="all-duties">
                  <div className="duties">
                    <div className="duty1">•</div>
                    <div className="duty2">
                      Managed diverse 3,000-unit fleet.
                    </div>
                  </div>

                  <div className="duties">
                    <div className="duty1">•</div>
                    <div className="duty2">
                      Developed annual budget, chargeback rates & capital
                      replacement plan.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

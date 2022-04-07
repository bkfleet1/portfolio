import React from 'react';
import profileImage from '../../assets/images/bkelley.png';
function About() {
  return (
<section class="about-section">
      <div id="aboutme" class="about-box">
        <div>
          <h1>about me</h1>
        </div>

        <div class="about">
          <img
            src={`${profileImage}`}
            alt="Brad Kelley"
            class="services-img"
          />
          <p>
            My name is Brad Kelley. I have over 25-years of experience as a
            technology consultant and recently endeavored to become a full-stack
            software developer. In 2002, I co-founded Mercury Associates, Inc.
            (“Mercury”), the largest independent fleet consulting and technology
            services firm in North America. I served as the firm’s Senior Vice
            President and Chief Technology Officer (CTO) for 20-years until the
            company was purchased by CDPQ, a leading global private equity
            platform. As the firms CTO, I led the firm's Technology Consulting
            Services & Cloud Services business lines, which provided advisory
            and technical services as well as SaaS and IaaS.
          </p>
          <p>
            In 2020, I departed Mercury to pursue a long-time dream of becoming
            a software developer, creating native web applications with
            intuitive, visually stunning interfaces. I am particularly
            passionate about solutions that harmonize and visualize complex
            business activities in a “single pane of glass” – unifying diverse
            data streams and technologies, such as business systems, IoT and
            geospatial data, artificial intelligence, and analytics.
            Additionally, I am highly interested in skeuomorphic and neumorphic
            UI designs to improve software usability.
          </p>
          <p>
            I am currently pursuing a full-stack developer certification with
            Rice University, which should be awarded by April 2022. I also hold
            a master's in public administration (MPA) with Southern Illinois
            University and a bachelor's (BS) in international business with
            Spring Hill College.
          </p>
          <p>
            My wife, Bobi, and I have two adult children, four grandchildren,
            and five dogs. We also raise honey bees on our farm in New Waverly,
            Texas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

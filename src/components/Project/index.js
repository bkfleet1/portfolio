import React from 'react';
import imgRepo from "../../assets/images/code.png";
import imgDeploy from "../../assets/images/site.png";

function Project() {
 const projList = [
    {
      pname: "Chit Chat",
      pimage: "chitchat.png",
      palt: "user accessibility website design",
      description: "Chit Chat is a mobile-responsive, social media platform on which users can post messages and pictures - known as Shout Outs. Anyone can view Shout Outs, including unregistered users, but only registered users can create, update, and delete them. Additionally, registered users can add comments & rate content shared by others. Chit Chat is my second multi-developer project and employs MVC design, as well as leverages MySQL, RESTful APIs, and user session management with cookies.",
      deploy: "https://chitchat2022.herokuapp.com/",
      repository: "https://github.com/mssjhu9/social-junk/",
    },
    {
      pname: "LocalBeats",
      pimage: "localbeats.png",
      palt: "localbeats api enabled application",
      description: "LocalBeats is a mobile-responsive, web application designed to  provide its users with music videos and live events. Users simply select a music genre and enter a city name and the application  presents content from YouTube (videos) and events from Ticketmaster; which is dynamically populated using multiple  RESTful APIs. Jquery, HTML5, Bulma, and P5 were also used in the development of the program. Additionally, LocalBeats is my first multi-developer project, requiring both synthesis of ideas and code - a fantastic experience at all levels.",
      deploy: "https://ditazan.github.io/LocalBeats/",
      repository: "https://github.com/ditazan/LocalBeats/",
    },
    {
      pname: "Tech Blog",
      pimage: "tech-blog.png",
      palt: "tech blog application",
      description: "Tech Blog is a micro-blogging platform on which software developers can post content and comments to further professional development. Users can quickly create a profile, including username and password, login and begin creating content. User password are hashed and stored in a MySQL database as well as user sessions to provide essential security. Cookies are also utilized to manage user sessions.",
      deploy: "https://texblog.herokuapp.com/",
      repository: "https://github.com/bkfleet1/tech-blog",
    },
    {
      pname: "Pizza Hunt",
      pimage: "pizza-hunt.png",
      palt: "Pizza Hunt application",
      description: "As the name suggest, Pizza Hunt is a commerce portal that provides customers with the ability to place an order for a pizza. Customers can also create and read reviews. Using MongoDB's Atlas, a popular Cloud-based NoSQL database, and RESTful APIs all customer transactions and reviews are rapidly processed and stored.",
      deploy: "https://afternoon-bastion-46468.herokuapp.com/",
      repository: "https://github.com/bkfleet1/pizza-hunt",
    },
    {
      pname: "Horiseon",
      pimage: "horiseon.png",
      palt: "user accessibility website design",
      description: "Horiseon is a class project in which I modified an existing code set to address various bugs, incorporate accessibility features, and improve CSS styling format. Some of the improvements made included consolidation of CSS classes, adding meta tags for accessibility and search engine optimization, and curing incomplete code syntax.",
      deploy: "https://bkfleet1.github.io/horiseon/",
      repository: "https://github.com/bkfleet1/horiseon/",
    },
    {
      pname: "Run Buddy",
      pimage: "runbuddy-mobile.png",
      palt: "mobile responsive site design",
      description: "Run Buddy is a site that I created as part of my full-stack developer training. A core feature is its ability to dynamically scale fonts and images, as well as placement of site content at different screen resolutions a necessity with the ubiquitous use and diversity of mobile devices. Responsiveness of site elements is controlled by CSS styling properties, such as flex and media queries.",
      deploy: "https://bkfleet1.github.io/run-buddy/",
      repository: "https://github.com/bkfleet1/run-buddy/",
    }
  ];
  
  

  return (
    <section className="projects-section">
    <div id="projects" className="projects-box">
      <div>
        <div className='header1'>projects</div>
      </div>
      <div className="projects-group">
    {projList.map((proj) => (
          <div className="projects" key={proj.pname}>
            <div className='pdesc'>
            <a href={proj.deploy} target="_blank" rel="noreferrer">
              <img
                src={require(`../../assets/images/${proj.pimage}`)}
                alt={proj.palt}
              />
            </a>
            <div className='header2'>{proj.pname}</div>
            <p>
              {proj.description}
            </p>
            </div>
            <div className='plinks'>
            <div className="project-links">
              <a href={proj.deploy} target="_blank" rel="noreferrer">
                <img
                  src={imgDeploy}
                  alt={proj.palt}
                />
                {" "}view deployed site
              </a>
            </div>
            <div className="project-links">
              <a href={proj.repository} target="_blank" rel="noreferrer">
                <img 
                  className='pjimg'
                  src={imgRepo}
                  alt={proj.palt}
                />
                {" "}view code
              </a>
            </div>
            </div>
          </div>))}
          </div>
          </div>
          </section>
  )
}

export default Project;

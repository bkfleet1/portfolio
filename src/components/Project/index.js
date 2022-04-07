import React from 'react';
import imgRepo from "../../assets/images/code.png";
import imgDeploy from "../../assets/images/site.png";

function Project() {
  [
    {
      pname: "Chit Chat",
      pimage: "chitchat.png",
      palt: "user accessibility website design",
      description: "Chit Chat is a mobile-responsive, social media platform on which users can post messages and pictures - known as Shout Outs. Anyone can view Shout Outs, including unregistered users, but only registered users can create, update, and delete them. Additionally, registered users can add comments & rate content shared by others. Chit Chat is my second multi-developer project and employs MVC design, as well as leverages MySQL, RESTful APIs, and user session management with cookies.",
      deploy: "https://chitchat2022.herokuapp.com/​",
      respository: "https://github.com/mssjhu9/social-junk"
    },
    {
      pname: "LocalBeats",
      pimage: "localbeats.png",
      palt: "localbeats api enabled application",
      description: "LocalBeats is a mobile-responsive, web application designed to  provide its users with music videos and live events. Users simply select a music genre and enter a city name and the application  presents content from YouTube (videos) and events from Ticketmaster; which is dynamically populated using multiple  RESTful APIs. Jquery, HTML5, Bulma, and P5 were also used in the development of the program. Additionally, LocalBeats is my first multi-developer project, requiring both synthesis of ideas and code - a fantastic experience at all levels.",
      deploy: "https://ditazan.github.io/LocalBeats/",
      respository: "https://github.com/ditazan/LocalBeats/"
    },
    {
      pname: "Horiseon",
      pimage: "horiseon.png",
      palt: "user accessibility website design",
      description: "Horiseon is a class project in which I modified an existing code set to address various bugs, incorporate accessibility features, and improve CSS styling format. Some of the improvements made included consolidation of CSS classes, adding meta tags for accessibility and search engine optimization, and curing incomplete code syntax.",
      deploy: "https://bkfleet1.github.io/horiseon/",
      respository: "https://github.com/bkfleet1/horiseon"
    },
    {
      pname: "Run Buddy",
      pimage: "runbuddy-mobile.png",
      palt: "mobile responsive site design",
      description: "Run Buddy is a site that I created as part of my full-stack developer training. A core feature is its ability to dynamically scale fonts and images, as well as placement of site content at different screen resolutions a necessity with the ubiquitous use and diversity of mobile devices. Responsiveness of site elements is controlled by CSS styling properties, such as flex and media queries.",
      deploy: "https://bkfleet1.github.io/run-buddy/",
      respository: "https://github.com/bkfleet1/run-buddy"
    },
    {
      pname: "Work Engine - A Future Project",
      pimage: "jensson.png",
      palt: "Jensson Work Engine",
      description: "butcher selfies chambray shabby chic gentrify readymade yr Echo Park XOXO Tumblr normcore Banksy direct trade Blue Bottle chillwave you probably haven't heard of them single-origin coffee Vice fanny pack fixie Odd Future Austin fingerstache pickled twee synth Wes Anderson Thundercats viral bitters flannel leggings narwhal Marfa Schlitz sustainable Intelligentsia umami deep v craft",
      deploy: "/",
      repository: "/"
    }
  ].map(({pname, pimage, palt, description, deploy, repository}) => {

  return (
          <div class="projects">
            <a href={deploy} target="_blank" rel="noreferrer">
              <img
                src={require(`../../assets/images/${pimage}`)}
                alt={palt}
              />
            </a>
            <h2>{pname}</h2>
            <p>
              {description}
            </p>
            <div class="project-links">
              <a href={deploy} target="_blank" rel="noreferrer">
                <img
                  src={imgDeploy}
                  alt={palt}
                />
                view deployed site
              </a>
            </div>
            <div class="project-links">
              <a href={repository} target="_blank" rel="noreferrer">
                <img
                  src={imgRepo}
                  alt={palt}
                />
                view code
              </a>
            </div>
          </div>
  )
})}

export default Project;

import React from "react";
import "../../assets/styles/landingPage/tech-card.scss";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoReact, BiLogoAngular, BiLogoVuejs } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJquery } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiPhp, DiDjango } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { FaApple, FaAndroid } from "react-icons/fa";
import { DiIonic, DiReact } from "react-icons/di";
import Image from "../../assets/images/landingPage/next-js.svg";
import Node from "../../assets/images/landingPage/nodejs-icon.svg";
import Reddis from "../../assets/images/landingPage/redis-logo.png"
import Firebase from "../../assets/images/landingPage/firebase-1.svg"
import Express from "../../assets/images/landingPage/express-js-icon (1).svg"
import icon2 from "../../assets/images/landingPage/icons8-react-native.svg"
import icon3 from "../../assets/images/landingPage/mongodb-svgrepo-com.svg"
import dockerIcon from "../../assets/images/landingPage/car1.jpeg"

const technologies = [
  {
    title: "Nextjs",
    languages: [
      { icon: <img width={50} height={50} src={Image} alt="Next.js" />},
    
    ],
  },
  {
    title: "Nodejs",
    languages: [
      {icon: <img width={50} height={50} src={Node} alt="Node" />},
    ],
  },
  {
    title: "Firebase",
    languages: [
      {icon: <img width={50} height={50} src={Firebase} alt="Firebase" />},
    ]
  },
  {
    title: "Reddis",
    languages: [
      { icon: <img width={60} height={60} src={Reddis} alt="Reddis" />}
    ],
  },
  {
    title: "ExpressJs",
    languages: [
      { icon: <img width={50} height={50} src={Express} alt="Express" />}
    ],
  },
  {
    title: "ReactJs",
    languages: [
      { icon: <img width={50}  src={icon2} alt="reactjs" />}
    ],
  },
  {
    title: "MongoDB",
    languages: [
      { icon: <img width={50}  src={icon3} alt="mongodb" />}
    ],
  },
  {
    title: "Docker",
    languages: [
      { icon: <img width={50}  src={dockerIcon} alt="docker" />}
    ],
  }
  
];

const TechStacks = () => {
  return (
    <div className="container tech-stacks">
      <div className="container">
        <h1 className="text-center text-light"><b>Technologies used</b></h1>
      </div>
      <div  id="tech--stacks">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-card bg-dark text-white shadow-lg text-center">
            <h3>{tech.title}</h3>
            <div>
              {tech.languages.map((item, index) => (
                <div key={index} className="stack-name">
                  {item.icon} {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStacks;

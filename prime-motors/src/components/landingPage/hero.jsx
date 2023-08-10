import React from "react";
import "../../assets/styles/landingPage/hero.scss";
import heroImage from "../../assets/images/landingPage/hero.jpeg";
import "bootstrap/dist/css/bootstrap.css"
import { motion } from "framer-motion";

export default function Hero() {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <motion.div className="hero bg-black" initial="hidden" animate="visible">
      <div className="d-flex align-items-center justify-content-center flex-column hero-text text-light">
        <motion.div
          id="hero-text"
          variants={textVariants}
        >
          <div>
            <h1 className="text-center text-text-dark-emphasis">
              Carlos Prime motors <br/> & spare parts
            </h1>
          </div>
          <div>
            <p className="text-center">
              <b>Discover Excellence in Cars and Genuine Spare-Parts at Carlos Today!</b>
            </p>
          </div>
          <motion.div
            className="banner-message"
            variants={textVariants}
          >
            <p className="text-center">
              Driven by Quality: Genuine Spare Parts and Cars, Powered by Passion.
              <br />
              Wide Range of Cars and Dependable Spare Parts - Carlos Automotive and Spare Parts
              <br />
              Drive in Today's Competitive Landscape.
            </p>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div variants={imageVariants}>
        <img src={heroImage} alt="hero" className="hero-image" />
      </motion.div>
    </motion.div>
  );
}

import React, { useState, useEffect } from "react";
import { servicesCard } from "./servicesDescriptor";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"; // White-colored icons
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";


const services = servicesCard.map((service, index) => {
  const { title, subTitle, services } = service;
  return (
    <motion.div
      className="service-slide text-white container bg-dark shadow col slide"
      key={index}
      style={{ padding: "20px"}}
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
    >
      <h1 className="text-center">{title}</h1>
      <p className="text-justify">{subTitle}</p>
      <ul>
        {services.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn btn-outline-info">
          Get Started
        </button>
      </div>
    </motion.div>
  );
});

export default function OurServices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === servicesCard.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? servicesCard.length - 1 : prevIndex - 1
    );
  };

  const variants = {
    enter: {
      x: 50,
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -50,
      opacity: 0,
    },
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div style={{ paddingTop: "20px", paddingBottom: "20px", width: "95%", margin: "10px auto" }}>
      <h3 className="text-center text-info">Our Services</h3>
      <div className="all-services">
        <Row>
          <Col md={1} className="d-flex align-items-center justify-content-center">
            <div className="text-white"><BsArrowLeft size={20} onClick={goToPreviousSlide} color="#fff" /> prev</div>
          </Col>
          <Col md={10}>
            <motion.div
              key={currentIndex}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {services[currentIndex]}
            </motion.div>
          </Col>
          <Col md={1} className="d-flex align-items-center justify-content-center">
            <div className="text-white"><BsArrowRight size={20} onClick={goToNextSlide} color="#fff" /> next</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
import React from "react";
import "../../assets/styles/landingPage/footer.scss";
import { footerItems, contactDetails } from "./footerDescriptor";


export default function PageFooter() {
  const services = footerItems[0].map((item) => (
    <div key={item.title}>
      <h5>{item.title}</h5>
      <ul className="list-unstyled">
        {item.services.sort().map((service, key) => (
          <li key={key}><a href="#">{service}</a></li>
        ))}
      </ul>
    </div>
  ));

  const socialMediaLinks =  footerItems[1].map((item, key) => (
    <div key={key}>
      <h4>{item.title}</h4>
      <ul className="list-unstyled">
        {item.links.map((link, index) => {
          const Icon = item.icons[index];
          return (
            <li key={index}>
              <a
                href={`#`}
                rel="noopener noreferrer"
              >
                {link} {Icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  ));

 const otherLinks = footerItems[2].map((link, index) => {
  const {title, links} = link;
  return (
    <div key={index}>
      <h4 className="text-center">{title}</h4>
      <ul>
        {links.sort().map((link, key) => {
          return (<li key={key}><a href="#">{link}</a></li>)
        })}
      </ul>
    </div>
  )
 });

  const contactUs = contactDetails.map((detail, index) => {
    return (
      <div key={index}>
        <h4 className="text-center">{detail.title}</h4>
        {detail.links.map((link, index) => {
          const {title, val, icon} = link
          return (
            <div key={index}>
              <h5 id="contact-subs">{title}</h5>
              <ul>
                {val.map((data, index) => {
                  return (
                    <li key={index}>{data} {icon}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    )
  });

  return (
    <div className="footer bg-dark shadow text-white d-flex justify-content-around">
      <div className="d-flex flex-wrap" id="footer-content">
        <div>
          <h4 style={{marginLeft: "10px"}}>Our Services</h4>
          <ul className="list-unstyled" id="services">
            {services}
          </ul>
        </div>
        <div>{socialMediaLinks}</div>
        <div id="contact-us">{contactUs}</div>
        <div id="other-links">{otherLinks}</div>
      </div>
    </div>
  );
}

import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.css"

export default function LandingNavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-lg" style={{ paddingLeft: "10px" }}>
        <a className="navbar-brand text-info" rel="noopener" href="#">
          <b>Carlos Prime motors<i></i></b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{marginRight: "30px", border: 0, outline: 0}}
        >
          <HiOutlineMenu />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: '10%' }}>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" rel="noopener" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="webDevelopmentDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Car Sales
              </a>
              <div className="dropdown-menu shadow-lg border-0" aria-labelledby="webDevelopmentDropdown" >
                <a className="dropdown-item" href="#">
                 Spare Parts
                </a>
                <a className="dropdown-item" href="#">
                  Car Accessories
                </a>
                <a className="dropdown-item" href="#">
                  Back-end Development
                </a>
                <a className="dropdown-item" href="#">
                  E-commerce Solutions
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="mobileDevelopmentDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tata Motors Services
              </a>
              <div className="dropdown-menu shadow-lg border-0" aria-labelledby="mobileDevelopmentDropdown">
                <a className="dropdown-item" href="#">
                  iOS App Development
                </a>
                <a className="dropdown-item" href="#">
                  Android App Development
                </a>
                <a className="dropdown-item" href="#">
                  Cross-Platform App Development
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="solutionsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Solutions
              </a>
              <div className="dropdown-menu shadow-lg border-0" aria-labelledby="solutionsDropdown">
                <a className="dropdown-item" href="#">
                  Custom Software Development
                </a>
                <a className="dropdown-item" href="#">
                  Enterprise Solutions
                </a>
                <a className="dropdown-item" href="#">
                  Cloud Services
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" rel="noopener" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" rel="noopener" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <div className="btn-group" style={{ position: "fixed", right: "30px" }}>
                <button className="btn btn-primary btn-sm">
                  <a rel="noopener" href="#" className="text-decoration-none text-light">
                    Talk to us
                  </a>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

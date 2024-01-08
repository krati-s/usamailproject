import React, { Fragment, useEffect, useState } from "react";
import usaFlag from "../../assets/images/usa-flag.gif";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import AOS from 'aos';
import { serviceDropdown } from "../../constants/constants";
import DropdownItem from "../commonCards/DropdownItem";
const Header = ({ active, setActive }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [aosAnimation, setAosAnimation] = useState('fade-down');
  const [drop, setDrop] = useState(false)
  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [active])
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const handleClick = (a) => {
    setActive(a)
    setAosAnimation('fade-down')
    if (sidebarVisible) {
      setSidebarVisible(!sidebarVisible)
    }
  }
  const handleDropdown = () => {
    setDrop(!drop)
  }

  return (
    <Fragment>
      <div className="top-header" data-aos='fade-out'>
        <div className="container">
          <div className="top-header-wrap">
            <div className="top-left-header">
              <h2>Work from anywhere.Send direct mail to anywhere</h2>
            </div>
            <div className="top-right-header">
              <div className="contact-header">
                <p>Contact us: Call or Text</p>
                <div className="telephone-contact">
                  <Link to="tel:+309 872-6245">
                    <span className="num-one"> <i className="fa-solid fa-phone"></i> <span className=" num-line">
                      (309) USA-MAIL</span> </span>
                    <span className="num-two num-line">(309) 872-6245</span>
                  </Link>
                </div>
              </div>
              <div className="flag-head">
                <img src={usaFlag} alt="usa flag" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <header
        className="header"
        id="myHeader"
        data-aos={aosAnimation}
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="mob_logo">
              <Link className="navbar-brand" to="" >
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="#offcanvas"
              data-bs-target="#navbarOffcanvas"
              aria-controls="navbarOffcanvas"
              aria-expanded={sidebarVisible ? "true" : "false"}
              aria-label="Toggle navigation"
              onClick={toggleSidebar}
            >
              <span className="mobile-nav navbar-toggler-icon">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </span>
            </button>
            <div
              className={`offcanvas offcanvas-start ${sidebarVisible ? 'show' : ''}`}
              id="navbarOffcanvas"
              tabIndex="-1"
              aria-labelledby="offcanvasNavbarLabel"
              style={{ visibility: `${sidebarVisible ? 'visible' : 'hidden'}` }}
              aria-hidden={`${sidebarVisible ? true : false}`}
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close btn-close-white text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  onClick={() => setSidebarVisible(!sidebarVisible)}
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="logo" onClick={() => handleClick('')}>
                  <Link className="navbar-brand" to="">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                <ul className="navbar-nav">
                  {                  // <li className={`nav-item `} onClick={handleDropdown}>
                    // <Link className="nav-link pr-48" to="#Services" >
                    //     Services
                    //     <span className="caret-btn">
                    //     <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none">
                    //         <path d="M6 9L12 15L18 9" stroke="#fff" stroke-width="2" stroke-linecap="round"
                    //             stroke-linejoin="round" />
                    //     </svg>
                    //     </span>
                    //   </Link>
                    //   <div className={`dropdownMenu ${drop  ? 'dropdownMenu_block' : ''}`}>
                    //   <ul>
                    //      {serviceDropdown.map(item => <DropdownItem {...item} />)}
                    //   </ul>
                    //   </div>
                    // </li>
                  }
                  <li className={`nav-item ${active === 'about' ? 'active' : ''}`} onClick={() => handleClick('about')}>
                    <Link className="nav-link pr-48" to="about-us">
                      About Us
                    </Link>
                  </li>
                  <li className={`nav-item ${active === 'contact' ? 'active' : ''}`} onClick={() => handleClick('contact')}>
                    <Link className="nav-link pr-48" to="contact-us">
                      Contact Us
                    </Link>
                  </li>
                  <li className={`nav-item ${active === 'faq' ? 'active' : ''}`} onClick={() => handleClick('faq')}>
                    <Link className="nav-link pr-48" to="faq">
                      FAQ
                    </Link>
                  </li>
                  <li className={`nav-item ${active === 'article' ? 'active' : ''}`} onClick={() => handleClick('article')}>
                    <Link className="nav-link" to="articles">
                      Articles
                    </Link>
                  </li>
                  <li className="last-navbar-li">
                    <ul className="btns-head">
                      <li className="nav-item">
                        <Link className="nav-link btn r-btn hover-btn wave-btn" to="#Log In">
                          Log In
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link btn w-btn wave-btn hover-btn" to="#Sign Up">
                          Sign Up
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {sidebarVisible && <div className={`${sidebarVisible && 'offcanvas-backdrop fade show'}`} onClick={() => setSidebarVisible(!sidebarVisible)}></div>}
          </nav>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;





import React from 'react'
import { Link } from 'react-router-dom'
import mail from '../../assets/svg/mail.svg'
import phone from '../../assets/svg/phone.svg'
import web from '../../assets/svg/web.svg'
import logo from '../../assets/images/logo.png'

const Footer = ({setActive}) => {
  return (
    <footer data-aos="fade-down" data-aos-duration="1200">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="footer-img">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="footer-text">
                        <p>
                        USAMail.Direct works with clients all over the country giving them an on-line portal to access premiere direct mail services that provides them resources so they can easily target their best customers anywhere in the USA.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="quick_links">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="javascript:void(0)">Pricing</Link></li>
                            <li><Link to="about-us"  onClick={() => setActive('about')}>About Us</Link></li>
                            <li><Link to="contact-us" onClick={() => setActive('contact')}>Contact Us</Link></li>
                            <li><Link to="javascript:void(0)">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="quick_links">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="articles" onClick={() => setActive('article')}>Our Blog</Link></li>
                            <li><Link to="faq" onClick={() => setActive('faq')}>FAQ</Link></li>
                            <li><Link to="javascript:void(0)">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <div className="contact_us">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>
                                <Link to="javascript:void(0)">
                                    <img src={mail} alt="mail" />
                                    info@usamail.direct
                                </Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)">
                                    <img src={phone} alt="phone" />
                                    (309) 872-6245
                                </Link>
                            </li>
                            <li>
                                <Link to="javascript:void(0)">
                                    <img src={web} alt="web" />
                                    USAMail.Direct
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="copright_sec">
        <div class="container">
        <p>2023 Copyright USAMail.Direct. All right reserved. Powered By: <span> <a className='Social-lexicon-link' href='https://sociallexicon.com/' target='blank'>Social Lexicon</a></span> </p>
    </div>
        </div>

    </footer>
  )
}

export default Footer
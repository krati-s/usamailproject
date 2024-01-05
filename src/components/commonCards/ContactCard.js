import React from 'react'
import { Link } from 'react-router-dom'

const ContactCard = ({image , contactTitle , contactText , link}) => {
  return (
    <div className="col-md-4 col-sm-6 " data-aos="fade-down">
    <div className="contact-box">
        <div className="contact-icon">
            <img src={image} alt="phone" />
        </div>
        <div className="contact-title">
            <h4>{contactTitle}</h4>
        </div>
        <div className="contact-text">
            <Link to={link}>{contactText}</Link>
        </div>
    </div>
</div>
  )
}

export default ContactCard
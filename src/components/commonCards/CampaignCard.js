import React from 'react'
import { Link } from 'react-router-dom'

const CampaignCard = ({ image, heading, links, buttonLink }) => {
    return (
        <div className="col-sm-6 col-lg-3">
            <div className="mc_box">
                <div className="mc_box_img">
                    <img src={image} alt="" />
                </div>
                <div className="mc_content">
                    <h3>{heading}</h3>
                    <ul>
                        {links.map(link =>
                            <li key={link}><i className="fa-solid fa-arrow-right-long"></i><Link to={link.link}>{link.heading}</Link>
                            </li>
                        )}
                    </ul>
                    <Link className="btn y-btn mt-15 hover-btn wave-btn" to={buttonLink}>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default CampaignCard
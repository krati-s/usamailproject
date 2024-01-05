import React from 'react'
import { Link } from 'react-router-dom'

const RecentArticleCard = ({image , heading , date , link}) => {
  return (
    <li data-aos="fade-right" data-aos-delay="200" data-aos-duration="1400">
    <Link to={link} className="rec_layout">
        <div className="rc_img">
            <img src={image} alt="article" />
        </div>
        <div className="rec_cont">
            <h5>{heading}</h5>
            <p><i className="fa-regular fa-calendar-days"></i>{date}</p>
        </div>
    </Link>
</li>
  )
}

export default RecentArticleCard



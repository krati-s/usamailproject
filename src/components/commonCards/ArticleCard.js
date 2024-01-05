import React from 'react'
import { Link } from 'react-router-dom'
import yellowArrow from '../../assets/svg/yellow_arrow.svg'
import whiteCalendar from '../../assets/svg/white_calendar.svg'
const ArticleCard = ({image , date , heading , link , articleInfo}) => {
  return (
    <div className="ach_box">
                            <div className="ach_img">
                                <img src={image} alt="achievement" />
                                <div className="ach_calendar">
                                    <span><img src={whiteCalendar} alt="" calendar /></span>
                                    {date}
                                </div>
                            </div>
                            <div className="ach_info">
                                <h3>{heading}</h3>
                                <p>{articleInfo}
                                </p>
                                <Link className="btn2" to={link} data-aos="flip-left" data-aos-delay="200"
                                    data-aos-duration="1400">View Article<span>
                                    <img src={yellowArrow} alt='yellow-arrow'/></span></Link>
                            </div>
                        </div>
  )
}

export default ArticleCard
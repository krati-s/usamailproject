import React from 'react'
import { Link } from 'react-router-dom'

const LetterBoxCard = ({delay , counter , title , paraHeading , para , linkHeading , link}) => {
  return (
    <li data-aos="fade-left" data-aos-delay={delay} data-aos-duration="1400">
                                        <span className="counter-num">
                                            {counter}
                                        </span>
                                        <div className="list-title">
                                            <h3>{title}</h3>
                                        </div>
                                        <div className="list-para">
                                            <p>
                                                <b>{paraHeading}</b>
                                            </p>
                                            <p>{para}
                                            </p>
                                        </div>
                                        <div className="list-link">
                                            <Link to={link}> {linkHeading}
                                                <i className="fa-solid fa-arrow-right-long"></i>
                                            </Link>
                                        </div>
                                    </li>
  )
}

export default LetterBoxCard
import React from 'react'
import { Link } from 'react-router-dom'
import yellowCalendar from '../../assets/svg/yellow_calender.svg'
const RightArticleCard = ({link , content , date}) => {
  return (
    <div class="rightbox_content">
    <div class="rightbox_c_text">
        <Link to={link}>
            <p> {content}
            </p>
        </Link>
    </div>
    {date && 
    <div class="rightbox_c_date">
        <img src={yellowCalendar} alt="yellow_calender" />
        <span class="content_date">{date} </span>
    </div>
}
</div>
  )
}

export default RightArticleCard
import React from 'react'
import quoteImage from '../../assets/svg/quote.svg'
const CustomerTestimonialCard = ({name , testimonial}) => {
  return (
    <div className="testimonial_box">
    <div className="testimonial_quotes">
        <img src={quoteImage} alt="quote" />
    </div>
    <div className="testimonial_name">
        <h4>
            {name}
        </h4>
    </div>
    <div className="testimonial_rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
    </div>
    <div className="testimonial_description">
        <p>
  {testimonial}
        </p>

    </div>
</div>
  )
}

export default CustomerTestimonialCard
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonialData } from '../utils/campaignData'
import CustomerTestimonialCard from '../commonCards/CustomerTestimonialCard'
import image from '../assets/images/testimonialTwo.png'
const TestimonialSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: null,
        nextArrow: null,
      };
    
  return (
    <section className="testimonial">
    <div className="container">
        <div className="row">
            <div className="col-lg-2">
                <h1 className="sec_title" data-aos="fade-right" data-aos-delay="200">What Our
                    Customers Say
                    About Us
                </h1>
            </div>

            <div className="col-lg-9">
            <div className='row'>
    <Slider
     {...settings}
    >
    {testimonialData.map((testimonial, index) => (
        <div key={index} className="col-lg-6 col">
          <CustomerTestimonialCard {...testimonial} />
        </div>
      ))}
      {testimonialData.map((testimonial, index) => (
        <div key={index} className="col-lg-6 col">
          <CustomerTestimonialCard {...testimonial} />
        </div>
      ))}
    </Slider>
    </div>
    </div>
    </div>
</div>
<div className="left_box">

</div>

<div className="right_box">
    <img src={image} alt="" />
</div>
</section>
  );
}


export default TestimonialSlider
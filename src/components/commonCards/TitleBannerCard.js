import React from 'react'


const TitleBannerCard = ({title , className}) => {
  return (
    <section className={`title-bg ${className}`}>
    <div className="page-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <h1 className="main_title ">
            {title}
        </h1>
    </div>
</section>
  )
}

export default TitleBannerCard
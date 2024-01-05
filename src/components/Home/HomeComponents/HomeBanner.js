import React from 'react'
import banner1 from '../../../assets/images/banner-b1.png'
import banner2 from '../../../assets/images/banner-b2.png'
import banner3 from '../../../assets/images/banner-b3.png'
import banner4 from '../../../assets/images/banner-b4.png'
const HomeBanner = () => {
  return (
    <section className="banner_sec" data-aos="zoom-in">
            <div className="container">
                <div className="banner_content">
                    <div className="row">
                        <div className="col-6 col-md-3 order-1" data-aos="fade-out" data-aos-delay="200"
                            data-aos-duration="1400">
                            <div className="banner-box">
                                <img src={banner1} alt="" />
                                <span className="b-arrow"><img src="./assets/images/banner-arrow.png" alt="" /></span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 order-2" data-aos="fade-out" data-aos-delay="400"
                            data-aos-duration="1400">
                            <div className="banner-box">
                                <img src={banner2} alt="" />
                                <span className="b-arrow"><img src="./assets/images/banner-arrow.png" alt="" /></span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 order-4 order-md-3" data-aos="fade-out" data-aos-delay="600"
                            data-aos-duration="1400">
                            <div className="banner-box">
                                <img src={banner3} alt="" />
                                <span className="b-arrow"><img src="./assets/images/banner-arrow.png" alt="" /></span>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 order-3 order-md-4" data-aos="fade-out" data-aos-delay="800"
                            data-aos-duration="1400">
                            <div className="banner-box">
                                <img src={banner4} alt="" />
                            </div>
                        </div>
                    </div>
                    <h1 className="main_title" data-aos="zoom-in">You can work from anywhere, via our online portal into
                        USAMail.Direct
                    </h1>
                </div>
            </div>
        </section>
  )
}

export default HomeBanner
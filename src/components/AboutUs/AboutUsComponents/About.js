import React from 'react'
import about1 from '../../../assets/images/about-1.png'
import about2 from '../../../assets/images/about-2.png'
import MissionCard from '../../commonCards/MissionCard'
import { missionData } from '../../../constants/constants'
const About = () => {
  return (
    <>
    <section className="about-us inner-padding">
            <div className="container">
                <div className="row align-items-md-center">
                    <div className="col-lg-6">
                        <div className="about-left">
                            <img src={about1} alt="about-img" className="img-fluid" />
                            <div className="h-cus">
                                <div className="h-cus-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="44" viewBox="0 0 36 44"
                                        fill="none">
                                        <path
                                            d="M35.1606 0H0V4.39508L12.7677 13.9763C4.70273 16.6354 0.307655 25.3376 2.96668 33.4026C5.6257 41.4676 14.284 45.8626 22.3929 43.2036C30.4579 40.5446 34.853 31.8643 32.194 23.7774C30.6557 19.1406 27.0297 15.4927 22.3929 13.9763L35.1606 4.39508V0ZM24.0411 38.4569L17.5803 34.6772L11.1195 38.4569L12.8336 31.1391L7.142 26.2166L14.6356 25.5794L17.5803 18.6791L20.525 25.5794L28.0186 26.2166L22.327 31.1391L24.0411 38.4569Z"
                                            fill="black" />
                                    </svg>
                                </div>
                                <div className="h-cus-right">
                                    <h4>500+</h4>
                                    <h6>Happy Customers</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-right">
                            <div className="about-title">
                                <h2 className="main_title2">About Us</h2>
                            </div>
                            <div className="about-description">
                                <p className="mb-30">
                                    USAMail.Direct is a geographically centralized direct mail company focused
                                    on helping our customers capture the highest rate of return on their marketing
                                    dollars with the greatest amount of convenience by allowing them to target their
                                    customers from anywhere in the country, to anywhere in the country.
                                </p>
                                <p>
                                    We accomplish this by providing a 24/7 online portal that allows our customers to
                                    work from the convenience of their own device, on their own schedules, from
                                    anywhere in the USA. Once the design and list selection has been completed,
                                    the direct mail project then flows via the online portal directly into our
                                    centralized
                                    processing facility and goes immediately into production. Once production is
                                    completed, the mailing goes from our dock,
                                    via privately contracted trucks, to
                                    whatever USPS Sectional Center Facility in the country is ultimately responsible
                                    for processing the mail for in-home delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="our-mission inner-padding">
        <div className="container position-relative">
            <div className="row">
               {missionData.map(mission => <MissionCard {...mission} />)}
            </div>
        </div>
    </section>
    <section className="about-us reverse-sec inner-padding">
            <div className="container">
                <div className="row align-items-md-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-left">
                            <img src={about2} alt="about-img" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-right">
                            <div className="about-title">
                                <h2 className="main_title2">Why Work With Us?</h2>
                            </div>
                            <div className="about-description">
                                <p className="mb-30">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel malesuada nisi.
                                    Donec suscipit varius risus, non
                                    luctus nisl euismod sit amet. Quisque vitae metus ac odio porttitor laoreet. Mauris
                                    a egestas est. Phasellus nibh magna,
                                    auctor non magna vitae, aliquet malesuada mauris. Sed gravida arcu et velit placerat
                                    volutpat. Curabitur non efficitur
                                    metus.
                                </p>
                                <p>
                                    iquam erat volutpat. Quisque placerat, metus convallis fringilla vehicula, turpis
                                    turpis rutrum massa, quis feugiat
                                    justo metus a dolor. Aliquam tuio ullamcorper mollis tortor. Ut finibus mtum eros,
                                    non blandit dui. Nulla dapibus quam
                                    tellus, vestibulum pulvinar nulla vehicula in. Pellentesque magna ex, eleifend
                                    sagittis
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default About
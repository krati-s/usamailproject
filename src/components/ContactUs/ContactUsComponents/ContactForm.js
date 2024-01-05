import React from 'react'
import { Link } from 'react-router-dom'

const ContactForm = () => {
    return (
        <section className="contact-form inner-padding">
            <div className="contact-page-inner">
                <div className="container">
                    <div className="form-inner" data-aos="zoom-in-up">
                        <form>
                            <h1 className="sec_title text-center">Get in Touch
                            </h1>
                            <div className="two-list mb-30">
                                <div className="input-div">
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="input-div">
                                    <input type="mail" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-msg mb-30">
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <div className="submit-btn">
                                <Link to="javascript:void(0)" className="r-btn hover-btn wave-btn">Submit</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
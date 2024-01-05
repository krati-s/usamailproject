import React from 'react'

const NewsLetter = () => {
  return (
    <section className="newsletter" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1400">
            <div className="container">
                <div className="show_bg">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="sec_title2">Subscribe to our Newsletter</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="newsletter-input">
                                <input type="text" placeholder="Email Address" />
                                <button className="n_inp_btn"><span>Subscribe</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default NewsLetter
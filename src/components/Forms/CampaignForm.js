import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CampaignForm = () => {
    const scrollToTop = () =>{ 
        setTimeout(()=>{
          window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
          }); 
        })
    }
    useEffect(()=>{
        scrollToTop()
    },[])
    
  return (
    <section className="order-form inner-padding" data-aos="fade-left" data-aos-duration="1500">
            <div className="container">
                <div className="order-form-inner ">
                    <h1 className="sec_title text-center">Tell us about your Direct Mail Project:
                    </h1>

                    <div className="b-bottom mb-35">
                        <h4 className="form-title mb-30"> Contact Details</h4>
                        <div className="two-feild">
                            <div className="input-feild mb-35">
                                <label>First Name <abbr>*</abbr></label>
                                <input type="text" id="first-name" name="first-name" />
                            </div>

                            <div className="input-feild mb-35">
                                <label>Last Name <abbr>*</abbr></label>
                                <input type="text" id="last-name" name="last-name" />
                            </div>

                            <div className="input-feild mb-35">
                                <label>Email Address <abbr>*</abbr></label>
                                <input type="mail" id="mailAddress" name="mailAddress" />
                            </div>

                            <div className="input-feild mb-35">
                                <label>Business Name <abbr>*</abbr></label>
                                <input type="text" id="first-name" name="first-name" />
                            </div>
                        </div>

                        <div className="input-feild">
                            <label for="Quantity">Business Name <abbr>*</abbr></label>
                            <input type="text" id="first-name" name="first-name" />
                        </div>

                    </div>

                    <div className="two-feild">
                        <div className="input-feild mb-35">
                            <label for="Quantity">Quantity</label>
                            <input type="text" id="Quantity" name="Quantity" value="6" />
                        </div>
                        <div className="input-feild date-feild mb-35">
                            <label for="mailDate">Project Mail Date</label>
                            <div className=" position-relative">
                                <input type="date" id="Project-mailDate" name="Project-mailDate" />
                                <span>
                                    <img src="./assets/images/calender.svg" alt="calender" />
                                </span>
                            </div>
                        </div>
                        <div className="input-feild mb-35">
                            <label className="mb-30 font-20">Are you providing Graphic Artwork?</label>
                            <label className="form-container mb-30">Yes
                                <span>upload your artwork to us <Link to="javascript:void(0)" className="red-clr">
                                        here</Link></span>
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="form-container ">No
                                <span>please include graphic design <Link to="javascript:void(0)" className="red-clr">
                                        fee’s</Link></span>
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>

                        </div>
                        <div className="input-feild mb-35">
                            <label className="mb-30 font-20">Are you providing the mailing list?</label>
                            <label className="form-container mb-30">Yes
                                <span>upload your list to us <Link to="javascript:void(0)" className="red-clr">
                                        here</Link></span>
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="form-container ">No
                                <span>I need to purchase a list. Search here: <Link to="javascript:void(0)"
                                        className="red-clr">
                                        | Melissa Data link |</Link></span>
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>

                    </div>

                    <div className="input-feild mb-35 b-bottom">
                        <label className="mb-30 font-20">What className of mail are you sending at? <span
                                className="gray-clr font-18">
                                (select one)
                                (for info
                            </span><span className="red-clr font-18">| Permit
                                Imprint Artwork | )</span></label>
                        <div className="pia-className">
                            <label className="form-container">Marketing Mail
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="form-container ">First Class Mail
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="form-container ">Non-profit Mail
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <div className="input-feild mb-35 b-bottom">
                        <label className="mb-3 font-20">What are you mailing?
                            <span className="gray-clr font-18"> (Five options / choose one)
                            </span>
                        </label>
                        <h4 className="form-title mb-30"> Postcard</h4>
                        <div className="textInput mb-35">
                            <p className="gray-clr">
                                What is the finished size of the postcard?
                                <span className="Ti-feild">
                                    <input type="text" value="11" />
                                    inches by
                                    <input type="text" value="11" />
                                    inches by
                                </span>
                            </p>
                        </div>
                        <div className="input-feild">
                            <label>Describe the mail piece:</label>
                            <input type="mail" id="mailPiece" name="mailPiece" />
                        </div>
                    </div>

                    <div className="input-feild mb-35 b-bottom">
                        <h4 className="form-title mb-30"> Folded Mailer (brochure)</h4>
                        <div className="textInput mb-35">
                            <p className="gray-clr mb-30">
                                What is the original (flat size/unfolded) of the self-mailer?
                                <span className="Ti-feild">
                                    <input type="text" value="11" />
                                    inches by
                                    <input type="text" value="11" />
                                    inches by
                                </span>
                            </p>
                            <p className="gray-clr">
                                What is the finished (final fold) size of the self-mailer?
                                <span className="Ti-feild">
                                    <input type="text" value="11" />
                                    inches by
                                    <input type="text" value="11" />
                                    inches by
                                </span>
                            </p>
                        </div>
                        <div className="input-feild">
                            <label>Describe the mail piece:</label>
                            <input type="mail" id="mailPiece" name="mailPiece" />
                        </div>
                    </div>

                    <div className="input-feild mb-35 b-bottom">
                        <h4 className="form-title mb-30"> Enveloped Mailer</h4>
                        <div className="pia-className align-items-center Mailer_div  mb-35">
                            <p className="gray-clr me-4">Describe the Carrier envelope</p>
                            <label className="form-container me-4">#10 Regular
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="form-container me-4">#10 Window
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <div className="other-des d-flex align-items-center">
                                <p className="gray-clr me-4">
                                    other
                                </p>
                                <div className="input-feild">
                                    <label>Describe</label>
                                    <input type="mail" id="mailPiece" name="mailPiece" />
                                </div>
                            </div>
                        </div>
                        <div className="pia-className align-items-center Mailer_div mb-35">
                            <p className="gray-clr me-4">Artwork for envelope: (select)</p>
                            <label className="form-container me-4">Single Color (black)
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="form-container ">Multi-Color
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="pia-className Mailer_div mb-35">
                            <p className="gray-clr me-4 d-flex flex-column gap-1">Is the salutation on the cover letter
                                Variable
                                Text?
                                <span className="font-14">(each letter has a different person’s name, i.e. Dear John
                                    Smith)</span>
                            </p>
                            <label className="form-container me-4">Yes
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="form-container ">No
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="pia-className Mailer_div">
                            <p className="gray-clr me-4 d-flex flex-column gap-1">Is the salutation on the cover letter
                                generic?
                                <span className="font-14">(each letter has a different person’s name, i.e. Dear John
                                    Smith)</span>
                            </p>
                            <label className="form-container me-4">Yes
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="form-container ">No
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <div className=" mb-35">
                        <div className="input-feild mb-35">
                            <label>How many inserts into envelope: (number select field)</label>
                            <input type="mail" id="mailPiece" name="mailPiece" />
                        </div>
                        <div className="input-feild mb-35">
                            <label>Describe inserts</label>
                            <input type="mail" id="mailPiece" name="mailPiece" />
                        </div>
                        <div className="input-feild mb-35">
                            <label>Other Mail Project: (please describe)</label>
                            <input type="mail" id="mailPiece" name="mailPiece" />
                        </div>
                        <div className="submit-btn">
                            <Link to="javascript:void(0)" className="r-btn">Submit</Link>
                        </div>
                    </div>




                </div>
            </div>
        </section>
  )
}

export default CampaignForm
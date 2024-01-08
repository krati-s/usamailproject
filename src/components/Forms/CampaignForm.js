import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import calendar from '../../assets/svg/calender.svg'
import emailjs from 'emailjs-com';
const CampaignForm = () => {
    const [err , setError] = useState(null)
    const scrollToTop = () => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })
    }
    useEffect(() => {
        scrollToTop()
    }, [])
    const sendEmail = (e) => {
        e.preventDefault();
        let errors = {};

        const fieldNames = {
            firstName: 'First Name',
            lastName: 'Last Name',
            mailAddress: 'Email Address',
            businessName: 'Business Name',
            Quantity: 'Quantity',
            graphicArtwork: 'Graphic Artwork',
            mailingList: 'Mailing List',
            mailClassName: 'Mail Class Name',
            ProjectMailDate: 'Project Mail Date',
            postcardInchesX : 'Postcard inches ',
            postcardInchesY : 'Postcard inches ',
            postcardMailPiece : 'Postcard mail piece',
            foldedMailerOriginalX : 'Folded mailer original inches',
            foldedMailerOriginalY : 'Folded mailer original inches',
            foldedMailerFinalX : 'Folded mailer final inches',
            foldedMailerFinalY : 'Folded mailer final inches',
            foldedMailerMailPiece : 'Folded mailer mail piece' ,
            carrierEnvelopOther : 'Carrier envelop other',
            carrierEnvelop :'Carrier envelop ',
            envelopArtwork : 'Envelop Artwork',
            variableTextCoverLetter : 'Variable Text Cover Letter',
            genericCoverLetter : 'Generic Cover Letter',
            otherMailProject : 'Other Mail Project',
            insertsDetail : 'Inserts Detail',
            insertsCount : 'Inserts Count'
          };
        const requiredFields = ['firstName', 'lastName', 'mailAddress', 'businessName', 'Quantity', 'graphicArtwork','mailingList','mailClassName','ProjectMailDate','postcardInchesX','postcardInchesY','postcardMailPiece','foldedMailerOriginalX','foldedMailerOriginalY','foldedMailerFinalX','foldedMailerFinalY','foldedMailerMailPiece','carrierEnvelopOther','carrierEnvelop','envelopArtwork','variableTextCoverLetter','genericCoverLetter','otherMailProject','insertsDetail','insertsCount'];
       
    for (const field of requiredFields) {
        const value = e.target[field].value.trim();
        if (!value) {
            // Use the field as a key in the errors object
            errors[field] = `Please fill in the ${fieldNames[field]}  field.`;
        }
    }
    setError(errors);
    if (Object.keys(errors).length === 0) {
        const serviceID = 'service_ovh6gqr';
        const templateID = 'template_uxj8yxp';
        const publicKey = 'BHJsVJav7t69rlCfh'

        const formData = {
            firstName: e.target['firstName'].value,
            lastName: e.target['lastName'].value,
            emailAddress: e.target['mailAddress'].value,
            businessName: e.target['businessName'].value,
            quantity: e.target['Quantity'].value,
            graphicArtwork : e.target['graphicArtwork'].value,
            mailingList : e.target['mailingList'].value,
            mailClassName : e.target['mailClassName'].value,
            projectMailDate : e.target['ProjectMailDate'].value,
            postcardInchesX : e.target['postcardInchesX'].value,
            postcardInchesY : e.target['postcardInchesY'].value,
            postcardMailPiece : e.target['postcardMailPiece'].value,
            foldedMailerOriginalX : e.target['foldedMailerOriginalX'].value,
            foldedMailerOriginalY : e.target['foldedMailerOriginalY'].value,
            foldedMailerFinalX : e.target['foldedMailerFinalX'].value,
            foldedMailerFinalY : e.target['foldedMailerFinalY'].value,
            foldedMailerMailPiece : e.target['foldedMailerMailPiece'].value,
            carrierEnvelopOther : e.target['carrierEnvelopOther'].value,
            carrierEnvelop : e.target['carrierEnvelop'].value,
            envelopArtwork : e.target['envelopArtwork'].value,
            variableTextCoverLetter : e.target['variableTextCoverLetter'].value,
            genericCoverLetter : e.target['genericCoverLetter'].value,
            otherMailProject : e.target['otherMailProject'].value,
            insertsDetail : e.target['insertsDetail'].value,
            insertsCount : e.target['insertsCount'].value
        };
     
      
        console.log(formData);
        // Send email using EmailJS
        emailjs.send(serviceID, templateID, formData, publicKey,)
            .then((response) => {
                console.log('Email sent successfully:', response);
            })
            .catch((error) => {
                console.error('Email failed to send:', error);
            });
    }};
    return (
        <section className="order-form inner-padding" data-aos="fade-left" data-aos-duration="1500">
            <div className="container">
                <div className="order-form-inner ">
                    <h1 className="sec_title text-center">Tell us about your Direct Mail Project:
                    </h1>

                    <form onSubmit={sendEmail}>
                        <div className="b-bottom mb-35">
                            <h4 className="form-title mb-30">Contact Details</h4>
                            <div className="two-feild">
                                <div className="input-feild mb-35">
                                    <label>First Name <abbr>*</abbr></label>
                                    <input type="text" id="first-name" name="firstName" />
                                    <label className='inputError'>{err?.firstName && err.firstName}</label>
                                </div>

                                <div className="input-feild mb-35">
                                    <label>Last Name <abbr>*</abbr></label>
                                    <input type="text" id="last-name" name="lastName" />
                                    <label className='inputError'>{err?.lastName && err.lastName}</label>
                                </div>

                                <div className="input-feild mb-35">
                                    <label>Email Address <abbr>*</abbr></label>
                                    <input type="email" id="mailAddress" name="mailAddress" />
                                    <label className='inputError'>{err?.mailAddress && err.mailAddress}</label>
                                </div>

                                <div className="input-feild mb-35">
                                    <label>Business Name <abbr>*</abbr></label>
                                    <input type="text" id="businessName" name="businessName" />
                                    <label className='inputError'>{err?.businessName && err.businessName}</label>
                                </div>
                            </div>

                             <div className="input-feild">
                                <label htmlFor="Quantity">Business Name <abbr>*</abbr></label>
                                <input type="text" id="quantity" name="quantity" />
                            </div> 
                            </div>

                    <div className="two-feild">
                    <div className="input-feild mb-35">
                        <label for="Quantity">Quantity</label>
                        <input type="text" id="Quantity" name="Quantity" placeholder='6' />
                        <label className='inputError'>{err?.Quantity && err.Quantity}</label>
                    </div>
                    <div className="input-feild date-feild mb-35">
                        <label for="mailDate">Project Mail Date</label>
                        <div className=" position-relative">
                            <input type="date" id="Project-mailDate" name="ProjectMailDate" />
                            <span>
                                <img src={calendar} alt="calender" />
                            </span>
                        </div>
                        <label className='inputError'>{err?.ProjectMailDate && err.ProjectMailDate}</label>
                    </div>
                    <div className="input-feild mb-35">
                        <label className="mb-30 font-20">Are you providing Graphic Artwork?</label>
                        <label className="form-container mb-30">Yes
                            <span>upload your artwork to us <Link to="javascript:void(0)" className="red-clr">
                                    here</Link></span>
                            <input type="radio" name='graphicArtwork' value='Yes' />
                            <span className="checkmark"></span>
                        </label>
                        <label className="form-container ">No
                            <span>please include graphic design <Link to="javascript:void(0)" className="red-clr">
                                    fee’s</Link></span>
                            <input type="radio" name='graphicArtwork' value='No'/>
                            <span className="checkmark"></span>
                        </label>
                        <label className='inputError'>{err?.graphicArtwork && err.graphicArtwork}</label>
                    </div>
                    <div className="input-feild mb-35">
                        <label className="mb-30 font-20">Are you providing the mailing list?</label>
                        <label className="form-container mb-30">Yes
                            <span>upload your list to us <Link to="javascript:void(0)" className="red-clr">
                                    here</Link></span>
                            <input type="radio" name='mailingList' value='Yes'/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="form-container ">No
                            <span>I need to purchase a list. Search here: <Link to="javascript:void(0)"
                                    className="red-clr">
                                    | Melissa Data link |</Link></span>
                            <input type="radio" name='mailingList' value='No' />
                            <span className="checkmark"></span>
                        </label>
                        <label className='inputError'>{err?.mailingList && err.mailingList}</label>
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
                            <input type="radio" name='mailClassName' value='Marketing Mail'/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="form-container ">First Class Mail
                            <input type="radio" name='mailClassName' value='First Class Mail' />
                            <span className="checkmark"></span>
                        </label>
                        <label className="form-container ">Non-profit Mail
                            <input type="radio" name='mailClassName' value='Non-profit Mail'/>
                            <span className="checkmark"></span>
                        </label>
                        <label className='inputError'>{err?.mailClassName && err.mailClassName}</label>
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
                                <input type="text" placeholder="11" name='postcardInchesX'/>
                                inches by
                                <input type="text" placeholder="11" name='postcardInchesY' />
                                inches by
                            </span>
                            <label className='inputError'>{err?.postcardInchesX && err.postcardInchesX}</label>
                            <label className='inputError'>{err?.postcardInchesY && err.postcardInchesY}</label>
                        </p>
                    </div>
                    <div className="input-feild">
                        <label>Describe the mail piece:</label>
                        <input type="mail" id="mailPiece" name="postcardMailPiece" />
                        <label className='inputError'>{err?.postcardMailPiece && err.postcardMailPiece}</label>
                    </div>
                </div>

                <div className="input-feild mb-35 b-bottom">
                    <h4 className="form-title mb-30"> Folded Mailer (brochure)</h4>
                    <div className="textInput mb-35">
                        <p className="gray-clr mb-30">
                            What is the original (flat size/unfolded) of the self-mailer?
                            <span className="Ti-feild">
                                <input type="text" placeholder="11" name='foldedMailerOriginalX'/>
                                inches by
                                <input type="text" placeholder="11" name='foldedMailerOriginalY'/>
                                inches by
                            </span>
                            <label className='inputError'>{err?.foldedMailerOriginalX && err.foldedMailerOriginalX}</label>
                            <label className='inputError'>{err?.foldedMailerOriginalY && err.foldedMailerOriginalY}</label>
                        </p>
                        <p className="gray-clr">
                            What is the finished (final fold) size of the self-mailer?
                            <span className="Ti-feild">
                                <input type="text" placeholder="11" name='foldedMailerFinalX'/>
                                inches by
                                <input type="text" placeholder="11" name='foldedMailerFinalY'/>
                                inches by
                            </span>
                            <label className='inputError'>{err?.foldedMailerFinalX && err.foldedMailerFinalX}</label>
                            <label className='inputError'>{err?.foldedMailerFinalY && err.foldedMailerFinalY}</label>
                        </p>
                    </div>
                    <div className="input-feild">
                        <label>Describe the mail piece:</label>
                        <input type="mail" id="mailPiece" name="foldedMailerMailPiece" />
                            <label className='inputError'>{err?.foldedMailerMailPiece && err.foldedMailerMailPiece}</label>
                    </div>
                </div>

                <div className="input-feild mb-35 b-bottom">
                    <h4 className="form-title mb-30"> Enveloped Mailer</h4>
                    <div className="pia-className align-items-center Mailer_div  mb-35">
                        <p className="gray-clr me-4">Describe the Carrier envelope</p>
                        <label className="form-container me-4">#10 Regular
                            <input type="radio" name='carrierEnvelop' value='#10 Regular' />
                            <span className="checkmark"></span>
                        </label>
                        <label className="form-container me-4">#10 Window
                            <input type="radio" name='carrierEnvelop' value='#10 Window'/>
                            <span className="checkmark"></span>
                        </label>
                        <div className="other-des d-flex align-items-center">
                            <p className="gray-clr me-4">
                                other
                            </p>
                            <div className="input-feild">
                                <label>Describe</label>
                                <input type="mail" id="mailPiece" name="carrierEnvelopOther" />
                            </div>
                        </div>
                        <label className='inputError'>{err?.carrierEnvelop && err.carrierEnvelop}</label>
                        <label className='inputError'>{err?.carrierEnvelopOther && err.carrierEnvelopOther}</label>
                    </div>
                    <div className="pia-className align-items-center Mailer_div mb-35">
                        <p className="gray-clr me-4">Artwork for envelope: (select)</p>
                        <label className="form-container me-4">Single Color (black)
                            <input type="radio" name='envelopArtwork' value='Single Color (black)'/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="form-container ">Multi-Color
                            <input type="radio"  name='envelopArtwork' value='Multi-Color' />
                            <span className="checkmark"></span>
                        </label>
                        <label className='inputError'>{err?.envelopArtwork && err.envelopArtwork}</label>
                    </div>
                    <div className="pia-className Mailer_div mb-35">
                        <p className="gray-clr me-4 d-flex flex-column gap-1">Is the salutation on the cover letter
                            Variable
                            Text?
                            <span className="font-14">(each letter has a different person’s name, i.e. Dear John
                                Smith)</span>
                        </p>
                        <label className="form-container me-4">Yes
                            <input type="radio" name='variableTextCoverLetter' value='Yes'/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="form-container ">No
                            <input type="radio" name='variableTextCoverLetter' value='No' />
                            <span className="checkmark"></span>
                        </label>
                        <label className='inputError'>{err?.variableTextCoverLetter && err.variableTextCoverLetter}</label>
                    </div>
                    <div className="pia-className Mailer_div">
                        <p className="gray-clr me-4 d-flex flex-column gap-1">Is the salutation on the cover letter
                            generic?
                            <span className="font-14">(each letter has a different person’s name, i.e. Dear John
                                Smith)</span>
                        </p>
                        <label className="form-container me-4">Yes
                            <input type="radio" name='genericCoverLetter' value='Yes'/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="form-container ">No
                            <input type="radio" name='genericCoverLetter' value='No'/>
                            <span className="checkmark"></span>
                        </label>
                        <label className='inputError'>{err?.genericCoverLetter && err.genericCoverLetter}</label>
                    </div>
                </div>

                <div className=" mb-35">
                    <div className="input-feild mb-35">
                        <label>How many inserts into envelope: (number select field)</label>
                        <input type="mail" id="mailPiece" name="insertsCount"  />
                        <label className='inputError'>{err?.insertsCount && err.insertsCount}</label>
                    </div>
                    <div className="input-feild mb-35">
                        <label>Describe inserts</label>
                        <input type="mail" id="mailPiece" name="insertsDetail" />
                        <label className='inputError'>{err?.insertsDetail && err.insertsDetail}</label>
                    </div>
                    <div className="input-feild mb-35">
                        <label>Other Mail Project: (please describe)</label>
                        <input type="mail" id="mailPiece" name="otherMailProject" />
                        <label className='inputError'>{err?.otherMailProject && err.otherMailProject}</label>
                    </div>
                    <div className="submit-btn">
                            <button type='submit' className="btn r-btn">Submit</button>
                    </div>
</div>
          
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CampaignForm

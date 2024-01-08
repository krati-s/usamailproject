import React, { useState } from 'react'
import { recentArticles } from '../../../constants/constants'
import RecentArticleCard from '../../commonCards/RecentArticleCard'
import user from "../../../assets/svg/user.svg"
import mail from '../../../assets/svg/mailTwo.svg'
import phone from '../../../assets/svg/PhoneTwo.svg'
import message from '../../../assets/svg/msg.svg'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';
const RecentArticles = () => {
    const [err , setError] = useState(null)
    const sendEmail = (e) => {
        e.preventDefault();
        let errors = {};

        const fieldNames = {
            name: ' Name',
            emailAddress : 'Email Address',
            contact : 'Phone Number',
            message : 'Message'
          };
        const requiredFields = ['name','emailAddress','contact','message'];
       
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
        const templateID = 'template_mb4bfql';
        const publicKey = 'BHJsVJav7t69rlCfh'

        const formData = {
            name: e.target['name'].value,
            emailAddress: e.target['emailAddress'].value,
            contact : e.target['contact'].value,
            message : e.target['message'].value
            
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
        <section className="recent-articles">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 recent-act">
                        <h1 className="sec_title" data-aos="fade-right">Our Recent Articles</h1>
                        <ul className="rec_ul">
                            {recentArticles.map(article => <RecentArticleCard {...article} />)}
                        </ul>
                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <div className="art-r-box">
                            <h1 className="sec_title">
                                Need Any Help? Contact Us
                            </h1>
                            <form onSubmit={sendEmail}>
                                <div className="form-input">
                                    <input type="text" placeholder="Name" name='name' />
                                    <span className="input-icon">
                                        <img src={user} alt="user" />
                                    </span>
                                    <label className='text-danger'>{err?.name && err.name}</label>
                                </div>
                                <div className="form-input">
                                    <input type="email" placeholder="Email Address" name='emailAddress' />
                                    <span className="input-icon">
                                        <img src={mail} alt="user" />
                                    </span>
                                    <label className='text-danger'>{err?.emailAddress && err.emailAddress}</label>
                                </div>
                                <div className="form-input">
                                    <input type="text" placeholder="Phone Number" name='contact' />
                                    <span className="input-icon">
                                        <img src={phone} alt="user" />
                                    </span>
                                    <label className='text-danger'>{err?.contact && err.contact}</label>
                                </div>
                                <div className="form-input">
                                    <textarea rows="4" cols="50" placeholder="Write you Message here" name='message'></textarea>

                                    <span className="input-icon">
                                        <img src={message} alt="user" />
                                    </span>
                                    <label className='text-danger'>{err?.message && err.message}</label>
                                </div>
                                <button type='submit' className="btn y-btn hover-btn wave-btn" to="javascript:void(0)">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div></section>
    )
}

export default RecentArticles
import React, { useEffect } from 'react'
import TitleBannerCard from '../commonCards/TitleBannerCard'
import ContactCard from '../commonCards/ContactCard'
import { contactData } from '../../constants/constants'
import ContactForm from './ContactUsComponents/ContactForm'
export const ContactUs = () => {
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

  return (
    <main>
    <TitleBannerCard title='CONTACT US' className='contact-bg' />
    <section className="contact-page inner-padding">
            <div className="contact-page-inner">
                <div className="container">
                <div className="row">
                {contactData.map(contact => <ContactCard {...contact}/>)}
                </div>
                </div>
                </div>
                </section>
                <ContactForm />
    </main>
  )
}

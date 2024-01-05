import React, { useEffect } from 'react'
import TitleBannerCard from '../commonCards/TitleBannerCard'
import { faqQuestions } from '../../constants/constants'
import FaqCard from '../commonCards/FaqCard'
export const FAQ = () => {
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
    <>
    <TitleBannerCard title='FAQ' className='faq-title' />

    <section className="faq inner-padding ">
    <div className="container">
        <h1 className="sec_title text-center" data-aos="fade-left">
            Frequently Asked Questions
        </h1>
        <div className="accordion faq-accordion" id="accordionExample" data-aos="fade-right">
        {faqQuestions.map((faq) => <FaqCard {...faq}  />)}
        </div>
        </div></section>
        </>
  )
}

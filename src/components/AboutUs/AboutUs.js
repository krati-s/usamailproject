import React, { useEffect } from 'react'
import TitleBannerCard from '../commonCards/TitleBannerCard'
import Testinomials from '../Testimonials/Testimonials'
import RecentArticles from '../Articles/ArticleComponents/RecentArticles'
import About from './AboutUsComponents/About'

export const AboutUs = () => {
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
    <TitleBannerCard title='ABOUT US' className='about-bg' />
    <About />
    <Testinomials />
    <RecentArticles />
    </main>
  )
}

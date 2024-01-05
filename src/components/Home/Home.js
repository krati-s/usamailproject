import React from 'react'
import Campaign from './HomeComponents/Campaign'
import NewsLetter from './HomeComponents/NewsLetter/NewsLetter'
import RecentArticles from '../Articles/ArticleComponents/RecentArticles'
import TopBar from './HomeComponents/HomeBanner'
import Testimonials from '../Testimonials/Testimonials'
import LetterBox from './HomeComponents/LetterBox/LetterBox'

export const Home = () => {
  return (
    <>
      <main>
        <TopBar />
        <Campaign />
        <LetterBox />
        <NewsLetter />
        <Testimonials />
        <RecentArticles />
        
      </main>
    </>
  )
}

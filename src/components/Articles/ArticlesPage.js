import React, { useEffect } from 'react'
import TitleBannerCard from '../commonCards/TitleBannerCard'
import Articles from './ArticleComponents/Articles'

export const ArticlesPage = () => {
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
    <TitleBannerCard title='ARTICLES' className='article-bg' />
    <Articles />
    </>
  )
}

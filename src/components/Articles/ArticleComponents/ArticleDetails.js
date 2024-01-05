import React, { useEffect } from 'react'
import TitleBannerCard from '../../commonCards/TitleBannerCard'
import { articleDetails } from '../../../constants/constants'
import ArticleDetailCard from '../../commonCards/ArticleDetailCard'

const ArticleDetails = () => {
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
    <>
    <TitleBannerCard title='ARTICLES DETAILS' className='article-bg'/>
    <section class="achievements blog-sec sec_pd">

    <div class="container">

        <div class="article-details">
        {articleDetails.map(article => <ArticleDetailCard {...article} />)}
        </div>
        </div>
        </section>
    </>
  )
}

export default ArticleDetails
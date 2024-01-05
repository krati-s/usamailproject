import React from 'react'
import { articles, categories, popularArticles } from '../../../constants/constants'
import ArticleCard from '../../commonCards/ArticleCard'
import RightArticleCard from '../../commonCards/RightArticleCard'
const Articles = () => {
  return (
    <section class="achievements blog-sec sec_pd">
    <div class="container">
        <div class="d-flex flex-wrap article-box">
            <div class="article-left-box" data-aos="fade-right">
            {articles.map(article => <ArticleCard {...article}/>)}
            </div>
            <div class="article-right-box">
            <div class="right_box mb-43" data-aos="fade-down">
                <div class="right_box_head">
                    <h2>Most Popular</h2>
                </div>
                <div class="right_box_body">
                {popularArticles.map(article => <RightArticleCard {...article} />)}
                </div>
              </div>
              <div class="right_box categories-box mb-43" data-aos="fade-up">
              <div class="right_box_head">
                  <h2>Categories</h2>
              </div>
              <div class="right_box_body">
              {categories.map(category => <RightArticleCard {...category} />)}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Articles
import React from 'react'

const ArticleDetailCard = ({title, content}) => {
  return (
    <div class="article-details">

                    <h1 class="sec_title">{title}</h1>
                    {content.map(content => <p>{content}</p>)}
                </div>
  )
}

export default ArticleDetailCard
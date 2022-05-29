import React from 'react'

const ArticleSkeleton = () => {
  return (
    <article className="post post--height">
        <div className="spinner spinner--height" >
            <div className="blob top"></div>
            <div className="blob bottom"></div>
            <div className="blob left"></div>

            <div className="blob move-blob"></div>
        </div>
    </article >
  )
}

export default ArticleSkeleton
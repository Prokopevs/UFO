import React from "react"
import ArticleInner from "../components/articleComponents/ArticleInner"
import ArticleSkeleton from "../components/ArticleSkeleton"
import { useAppDispatch, useAppSelector } from "../hooks/redux"

const Article = () => {
    const { posts, isLoading } = useAppSelector(state => state.postReducer)

    return (
        <>
            {isLoading ? <ArticleSkeleton/> : posts.map((obj, index) => (<ArticleInner
                key={index}
                isLoading={isLoading}
                {...obj}
            />))}
        </>
    )
}

export default Article
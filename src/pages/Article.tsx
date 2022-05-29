import React from "react"
import ArticleInner from "../components/articleComponents/ArticleInner"
import ArticleSkeleton from "../components/ArticleSkeleton"
import Spinner from "../components/Spinner"
import { useAppSelector } from "../hooks/redux"

const Article = () => {
    const { article, isLoading } = useAppSelector(state => state.articleReducer)

    return (
        <>
            {isLoading ? <ArticleSkeleton/> : article.map((obj, index) => (<ArticleInner
                key={index}
                isLoading={isLoading}
                {...obj}
            />))}
        </>
    )
}

export default Article
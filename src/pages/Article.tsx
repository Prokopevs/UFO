import React from "react"
import ArticleInner from "../components/articleComponents/ArticleInner"
import { useAppSelector } from "../hooks/redux"

const Article = () => {
    const { article, isLoading } = useAppSelector(state => state.articleReducer)

    return (
        <>
            {article.map((obj, index) => (<ArticleInner
                key={index}
                isLoading={isLoading}
                {...obj}
            />))}
        </>
    )
}

export default Article
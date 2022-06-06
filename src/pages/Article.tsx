import React from "react"
import ArticleInner from "../components/articleComponents/ArticleInner"
import ArticleSkeleton from "../components/ArticleSkeleton"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchInteresting } from "../store/reducers/InterestingSlice"

const Article = () => {
    const dispatch = useAppDispatch()
    const { posts, isLoading } = useAppSelector(state => state.postReducer)

    React.useEffect(() => {
        dispatch(fetchInteresting())
    }, [])   

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
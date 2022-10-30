import React from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { IInteresting } from "../../models/IInteresting"
import { ArticleSlice, fetchArticle } from "../../store/reducers/ArticleSlice"
import { postSlice } from "../../store/reducers/PostSlice"

const Recommend: React.FC<IInteresting> = ({ id, name, date }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { setArticleClick, setSelectedArticleId, setQueryFromRecommend } = ArticleSlice.actions
    const { isLoading } = useAppSelector((state) => state.postReducer)
    const { setUrl } = postSlice.actions
    const { articleClick, selectedArticleId, articleIsLoading } = useAppSelector(
        (state) => state.ArticleReducer
    )

    const onClickArticle = (id: string) => {
        if (!articleIsLoading && !isLoading) {
            dispatch(setQueryFromRecommend(true))
            dispatch(setSelectedArticleId(id))
            dispatch(fetchArticle(Number(id), true))
        }
    }

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    React.useEffect(() => {
        if (articleClick) {
            navigate(`/ufo/article/${selectedArticleId}`)
            dispatch(setUrl(`article/${selectedArticleId}`))
            dispatch(setArticleClick(false))
        }
    }, [articleClick])

    return (
        <li className="recommend__list-item">
            <h4 className="recommend__list-title">
                <p onClick={() => onClickArticle(id)}>{name}</p>
            </h4>
            <time className="recommend__list-date" dateTime="2022-05-21 19:21">
                {date}
            </time>
        </li>
    )
}

export default Recommend

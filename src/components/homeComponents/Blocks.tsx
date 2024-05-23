import React from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { IArticle } from "../../models/IArticle"
import { IconTwitter } from "../../pictures"
import { ArticleSlice, fetchArticle } from "../../store/reducers/ArticleSlice"
import { ErrorRedirect } from "../../hooks/ErrorRedirect"
import { postSlice } from "../../store/reducers/PostSlice"

const Blocks: React.FC<IArticle> = ({
    id,
    imageUrl,
    name,
    description,
    date,
    categoryName,
    isLoading,
}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { setArticleClick, setSelectedArticleId } = ArticleSlice.actions
    const { setUrl } = postSlice.actions
    const { articleIsLoading, articleClick, selectedArticleId, error } = useAppSelector(
        (state) => state.ArticleReducer
    )

    const onClickArticle = (id: string) => {
        if (!articleIsLoading && !isLoading) {
            dispatch(setSelectedArticleId(id))
            dispatch(fetchArticle(Number(id), true))
        }
    }

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    React.useEffect(() => {
        if (articleClick) {
            navigate(`/article/${selectedArticleId}`)
            dispatch(setUrl(`article/${selectedArticleId}`))
            dispatch(setArticleClick(false))
        }
    }, [articleClick])

    return (
        <article
            className={isLoading || articleIsLoading ? "post post--opacity" : "post"}
        >
            <div className="post__link" onClick={() => onClickArticle(id)}>
                <div className="post__header">
                    <img
                        className="post__preview"
                        src={imageUrl ? imageUrl : String(IconTwitter)}
                        alt=""
                    ></img>
                </div>

                <div className="post__content">
                    <h2 className="post__title">
                        <div className="post__caption">{name}</div>
                    </h2>
                    <p className="post__description">{description}</p>
                </div>
            </div>

            <div className="post__footer">
                <ul className="post__data">
                    <li className="post__data-item">
                        <time dateTime="2022-05-1 23:50">{date}</time>
                    </li>
                    <li className="post__data-item">
                        <div>{categoryName}</div>
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default Blocks

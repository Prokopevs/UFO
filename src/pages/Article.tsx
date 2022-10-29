import React from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { Link } from "react-router-dom"
import Comments from "../components/articleComponents/Comments"
import Recommend from "../components/articleComponents/Recommend"
import { useParams } from "react-router-dom"
import { ArticleSlice, fetchArticle } from "../store/reducers/ArticleSlice"
import { ErrorRedirect } from "../hooks/ErrorRedirect"

const Article = () => {
    const { interesting } = useAppSelector((state) => state.interestingReducer)
    const { article, articleIsLoading, queryFromRecommend, error } = useAppSelector(
        (state) => state.ArticleReducer
    )
    const dispatch = useAppDispatch()
    const { id } = useParams()

    function getMeRandomElements(interesting) {
        if (!!interesting.length) {
            const shufled = interesting
                .filter((el) => el.id !== id)
                .map((i) => [Math.random(), i])
                .sort()
                .map((i) => i[1])
            return shufled.slice(0, 4)
        }
    }

    const currentInterestingArr = React.useMemo(
        () => getMeRandomElements(interesting),
        [article, interesting, id]
    )

    React.useEffect(() => {
        if (!article.name && id) {
            dispatch(fetchArticle(Number(id), false))
        }
    }, [])

    if (!queryFromRecommend) {
        if (articleIsLoading || !currentInterestingArr) {
            return <div></div>
        }
    }

    ErrorRedirect(error)

    return (
        <article className={articleIsLoading ? "post post--opacity" : "post"}>
            <div className="post__actions">
                <Link to="/ufo">
                    <div className="post__back">вернуться назад</div>
                </Link>
            </div>

            <div className="post__header  post__header--open">
                <h1 className="post__title  post__title--mb1">{article.name}</h1>
                <ul className="post__data">
                    <li className="post__data-item">
                        <time dateTime="2022-05-21 19:20">{article.date}</time>
                    </li>
                    <li className="post__data-item">
                        <div>{article.categoryName}</div>
                    </li>
                </ul>
            </div>

            <div className="post__content">
                <div className="post__text">
                    <p>
                        <img className="post__inside" src={article.imageUrl} alt=""></img>
                    </p>

                    <p>{article.description}</p>

                    {article.text &&
                        article.text
                            .split(" | ")
                            .map((item, index) => <p key={index}>{item}</p>)}
                </div>
            </div>

            <div className="recommend">
                <h3 className="recommend__subtitle">Интересно почитать</h3>
                <ul className="recommend__list">
                    {currentInterestingArr &&
                        currentInterestingArr.map((items, index) => (
                            <Recommend key={`${items.name}_${index}`} {...items} />
                        ))}
                </ul>
            </div>

            {/* <Comments /> */}
        </article>
    )
}

export default Article

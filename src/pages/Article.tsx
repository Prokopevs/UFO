import React from "react"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { Link } from "react-router-dom"
import Comments from "../components/articleComponents/Comments"
import Recommend from "../components/articleComponents/Recommend"
import { useParams } from "react-router-dom"
import { ArticleSlice, fetchArticle } from "../store/reducers/ArticleSlice"

const Article: React.FC = () => {
    const { interesting } = useAppSelector((state) => state.interestingReducer)
    const { article, articleIsLoading } = useAppSelector((state) => state.ArticleReducer)
    const dispatch = useAppDispatch()
    const { id } = useParams()

    function getMeRandomElements(interesting) {
        if (!!interesting.length) {
            const shufled = interesting
                .filter((el) => el.id !== Number(id))
                .map((i) => [Math.random(), i])
                .sort()
                .map((i) => i[1])
            return shufled.slice(0, 4)
        }
    }

    const selected = React.useMemo(
        () => getMeRandomElements(interesting),
        [article, interesting]
    )

    React.useEffect(() => {
        if (!article.name && id) {
            dispatch(fetchArticle(Number(id)))
        }
    }, [])

    if (articleIsLoading || !selected) {
        return <div></div>
    }

    return (
        <article className="post">
            <div className="post__actions">
                <Link to="/ufo">
                    <p>вернуться назад</p>
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
                    {selected.map((items, index) => (
                        <Recommend key={index} {...items} />
                    ))}
                </ul>
            </div>

            <Comments />
        </article>
    )
}

export default Article

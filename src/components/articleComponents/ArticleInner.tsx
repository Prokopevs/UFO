import React from 'react'
import { Link } from "react-router-dom"
import Comments from './Comments'
import Recommend from './Recommend'
import { Post } from '../../pictures'
import { IArticles } from '../../models/IArticles'


const ArticleInner: React.FC<IArticles> = ({ imageUrl, name, date, categoryName, description, text, interesting, isLoading }) => {
    return (
        <article className="post">
            <div className="post__actions">
                <Link to="/">
                    <a href="#">вернуться назад</a>
                </Link>
            </div>

            <div className="post__header  post__header--open">
                <h1 className="post__title  post__title--mb1">{name}</h1>
                <ul className="post__data">
                    <li className="post__data-item">
                        <time dateTime="2022-05-21 19:20">{date}</time>
                    </li>
                    <li className="post__data-item">
                        <div>{categoryName}</div>
                    </li>
                </ul>
            </div>

            <div className="post__content">
                <div className="post__text">
                    <p>
                        <img src={imageUrl} alt=""></img>
                    </p>

                    <p>{description}</p>

                    <p>{text}</p>

                </div>
            </div>

            <div className="recommend">
                <h3 className="recommend__subtitle">Интересно почитать</h3>
                <ul className="recommend__list">
                    {interesting.map((items, index) => (<Recommend
                        key={index}
                        {...items}
                    />))}
                </ul>
            </div>

            
            <Comments />

        </article >
    )
}

export default ArticleInner
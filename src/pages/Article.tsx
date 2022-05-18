import React from "react"
import { Link } from "react-router-dom"
import Comments from "../components/articleComponents/Comments"
import Recommend from "../components/articleComponents/Recommend"
import { Post } from '../pictures'

const Article = () => {
    return (
        <article className="post">
            <div className="post__actions">
                <Link to="/">
                    <a href="#">вернуться назад</a>
                </Link>
            </div>

            <div className="post__header  post__header--open">
                <h1 className="post__title  post__title--mb1">Как я сходил на FrontEnd Conf 2021</h1>
                <ul className="post__data">
                    <li className="post__data-item">
                        <time dateTime="2020-06-21 19:20">21.06.2020</time>
                    </li>
                    <li className="post__data-item">
                        <div>конференции</div>
                    </li>
                </ul>
            </div>

            <div className="post__content">
                <div className="post__text">
                    <p>
                        <img src={String(Post)} alt=""></img>
                    </p>

                    <p>Прошло 50 лет с тех пор, как последний человек побывал на другом небесном теле. Теперь человечество заперто в пределах околоземной орбиты. Почему же мы еще не полетели на Марс или хотя бы не вернулись на Луну?</p>

                    <p>Прошло 50 лет с тех пор, как последний человек побывал на другом небесном теле. Теперь человечество заперто в пределах околоземной орбиты. Почему же мы еще не полетели на Марс или хотя бы не вернулись на Луну?</p>

                    <p>Прошло 50 лет с тех пор, как последний человек побывал на другом небесном теле. Теперь человечество заперто в пределах околоземной орбиты. Почему же мы еще не полетели на Марс или хотя бы не вернулись на Луну?</p>

                </div>
            </div>

            <Recommend/>

            <Comments/>

        </article>
    )
}

export default Article
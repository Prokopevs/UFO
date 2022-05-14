import React from "react"
import { Link } from "react-router-dom"
import { Post } from '../pictures'

function Article() {
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

            <div className="recommend">
                <h3 className="recommend__subtitle">Интересно почитать</h3>

                <ul className="recommend__list">
                    <li className="recommend__list-item">
                        <h4 className="recommend__list-title">
                            <a href="#">Как я сходил на FrontEnd Conf 2021 Как я сходил на FrontEnd Conf 2021</a>
                        </h4>
                        <time className="recommend__list-date" dateTime="2020-06-21 19:21">21.06.2020</time>
                    </li>
                    <li className="recommend__list-item">
                        <h4 className="recommend__list-title">
                            <a href="#">Как я сходил на FrontEnd Conf 2021 Как я сходил на FrontEnd Conf 2021</a>
                        </h4>
                        <time className="recommend__list-date" dateTime="2020-06-21 19:21">21.06.2020</time>
                    </li>
                    <li className="recommend__list-item">
                        <h4 className="recommend__list-title">
                            <a href="#">Как я сходил на FrontEnd Conf 2021</a>
                        </h4>
                        <time className="recommend__list-date" dateTime="2020-06-21 19:21">21.06.2020</time>
                    </li>
                    <li className="recommend__list-item">
                        <h4 className="recommend__list-title">
                            <a href="#">Как я сходил на FrontEnd Conf 2021</a>
                        </h4>
                        <time className="recommend__list-date" dateTime="2020-06-21 19:21">21.06.2020</time>
                    </li>
                </ul>
            </div>


            <h3 className="recommend__subtitle">Обсуждение</h3>
            <form className="form" action="/" method="post">
                <div className="form__group">
                    <textarea className="form__control  form__control--textarea" name="comment-text" placeholder="Текст комментария"></textarea>
                    <span className="form__line"></span>
                </div>
                <button className="btn  btn--blue  btn--rounded  btn--sm" type="submit">Отправить</button>
            </form>

            <ul className="comments">
                <li className="comments__item">
                    <div className="comments__header">
                        <img className="comments__avatar" src="https://placehold.it/30" alt=""></img>

                        <div className="comments__author">
                            <div className="comments__name">Дмитрий Валак</div>
                            <time className="comments__pubdate" dateTime="2020-12-21 19:21">2020-12-21</time>
                        </div>
                    </div>

                    <div className="comments__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, suscipit accusantium aut culpa eius esse architecto nobis sit excepturi expedita, repellendus quae praesentium rerum earum molestias ullam a doloribus at.</div>
                </li>

                <li className="comments__item">
                    <div className="comments__header">
                        <img className="comments__avatar" src="https://placehold.it/30" alt=""></img>

                        <div className="comments__author">
                            <div className="comments__name">Дмитрий Валак</div>
                            <time className="comments__pubdate" dateTime="2020-12-21 19:21">2020-12-21</time>
                        </div>
                    </div>

                    <div className="comments__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, suscipit accusantium aut culpa eius esse architecto nobis sit excepturi expedita, repellendus quae praesentium rerum earum molestias ullam a doloribus at.</div>
                </li>
            </ul>

        </article>
    )
}

export default Article
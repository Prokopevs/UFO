import React from "react"
import { Person } from "../../pictures"

const Comments = () => {
    return (
        <div>
            <h3 className="recommend__subtitle">Обсуждение</h3>
            <form className="form" action="/" method="post">
                <div className="form__group">
                    <textarea
                        className="form__control  form__control--textarea"
                        name="comment-text"
                        placeholder="Текст комментария"
                    ></textarea>
                    <span className="form__line"></span>
                </div>
                <button className="btn  btn--blue  btn--rounded  btn--sm" type="submit">
                    Отправить
                </button>
            </form>

            <ul className="comments">
                <li className="comments__item">
                    <div className="comments__header">
                        <img
                            className="comments__avatar"
                            src={String(Person)}
                            alt=""
                        ></img>

                        <div className="comments__author">
                            <div className="comments__name">Аноним</div>
                            <time
                                className="comments__pubdate"
                                dateTime="2022-05-21 19:21"
                            >
                                2022-05-21
                            </time>
                        </div>
                    </div>

                    <div className="comments__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                        suscipit accusantium aut culpa eius esse architecto nobis sit
                        excepturi expedita, repellendus quae praesentium rerum earum
                        molestias ullam a doloribus at.
                    </div>
                </li>

                <li className="comments__item">
                    <div className="comments__header">
                        <img
                            className="comments__avatar"
                            src={String(Person)}
                            alt=""
                        ></img>

                        <div className="comments__author">
                            <div className="comments__name">Аноним</div>
                            <time
                                className="comments__pubdate"
                                dateTime="2022-05-21 19:21"
                            >
                                2022-05-21
                            </time>
                        </div>
                    </div>

                    <div className="comments__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                        suscipit accusantium aut culpa eius esse architecto nobis sit
                        excepturi expedita, repellendus quae praesentium rerum earum
                        molestias ullam a doloribus at.
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Comments

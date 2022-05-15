import React from "react"

function Recommend() {
    return (
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
    )
}

export default Recommend
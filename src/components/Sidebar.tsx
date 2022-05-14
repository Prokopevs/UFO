import React from "react"

import { All, logoPopular, IconHistory, Ufo, Space, Planets, Missions, IconTwitter, IconFacebook, IconVk } from '../pictures'

function Sidebar() {

    return (
        <aside className="sidebar">
                <ul>
                    <li className="category">
                        <div className="category__inner category__inner--active">
                            <img className="category__icon" src={String(All)} alt="sidebar icon"></img>
                            <a className="category__text" href="#">Все</a>
                        </div>
                    </li>
                    <li className="category">
                        <div className="category__inner">
                            <img className="category__icon" src={String(logoPopular)} alt="sidebar icon"></img>
                            <a className="category__text" href="#">Популярное</a>
                        </div>
                    </li>
                    <li className="category">
                        <div className="category__inner">
                            <img className="category__icon" src={String(IconHistory)} alt="sidebar icon"></img>
                            <a className="category__text" href="#">Истории</a>
                        </div>
                    </li>
                    <li className="category">
                        <div className="category__inner">
                            <img className="category__icon" src={String(Ufo)} alt="sidebar icon"></img>
                            <a className="category__text" href="#">НЛО</a>
                        </div>
                    </li>
                    <li className="category">
                        <div className="category__inner">
                            <img className="category__icon" src={String(Space)} alt="sidebar icon"></img>
                            <a className="category__text" href="#">Космос</a>
                        </div>
                    </li>
                    <li className="category">
                        <div className="category__inner">
                            <img className="category__icon" src={String(Planets)} alt="sidebar icon"></img>
                            <a className="category__text" href="#">Планеты</a>
                        </div>
                    </li>
                    <li className="category">
                        <div className="category__inner">
                            <img className="category__icon" src={String(Missions)} alt="sidebar icon"></img>
                            <a className="category__text" href="#">Миссии</a>
                        </div>
                    </li>
                </ul>

                <div className="social__share">Поделиться</div>
                <ul className="social">
                    <li className="social__item">
                        <a className="social__link" href="#" target="_blank">
                            <img className="social__img" src={String(IconTwitter)} alt="twitter"></img>
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="social__link" href="#" target="_blank">
                            <img className="social__img" src={String(IconFacebook)} alt="vk"></img>
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="social__link" href="#" target="_blank">
                            <img className="social__img" src={String(IconVk)} alt="pinterest"></img>
                        </a>
                    </li>
                </ul>
            </aside>
    )
}

export default Sidebar
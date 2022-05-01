import React from "react";
import logoPopular from './assets/img/popular.png';
import IconHistory from './assets/img/history.png';
import IconTwitter from './assets/img/twitter.png';
import IconFacebook from './assets/img/facebook.png';
import IconVk from './assets/img/vk.svg';
import Galaxy from './assets/img/galaxy.png';
import All from './assets/img/all.png';
import Ufo from './assets/img/ufo.png';
import Planets from './assets/img/planets.png';
import Space from './assets/img/space.png';
import Missions from './assets/img/missions-1.png';
import Post from './assets/img/post-1.jpg';
import Post2 from './assets/img/post.jpg';



function App() {
    return (
        <div className="page">
            <header className="header">
                <div className="header__wrapper">
                    <div className="header__inner">
                        <img className="header__logo" src={Galaxy} alt="ufo logo"></img>
                        <div className="header__name">LANIAKEA</div>

                        <nav className="nav">
                            <ul className="nav__list">
                                <li className="nav__item">
                                    <a className="nav__link" href="#">Главная</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="#">Обо мне</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="#">Обо мне</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="#">Реклама</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="toggleWrapper">
                        <input type="checkbox" checked="checked" className="dn" id="dn" />
                        <label htmlFor="dn" className="toggle">
                            <span className="toggle__handler">
                                <span className="crater crater--1"></span>
                                <span className="crater crater--2"></span>
                                <span className="crater crater--3"></span>
                            </span>
                            <span className="star star--1"></span>
                            <span className="star star--2"></span>
                            <span className="star star--3"></span>
                            <span className="star star--4"></span>
                            <span className="star star--5"></span>
                            <span className="star star--6"></span>
                        </label>
                    </div>

                </div>
            </header>

            <aside className="sidebar">
                <ul>
                    <li className="category">
                        <div className="category__inner category__inner--active">
                            <img className="category__icon" src={All} alt="sidebar icon"></img>
                            <a className="category__text" href="#">Все</a>
                        </div>
                    </li>
                    <li className="category">
                        <div className="category__inner">
                            <img className="category__icon" src={logoPopular} alt="sidebar icon"></img>
                            <a className="category__text" href="#">Популярное</a>
                        </div>
                    </li>
                    <li className="category">
                        <div className="category__inner">
                            <img className="category__icon" src={IconHistory} alt="sidebar icon"></img>
                            <a className="category__text" href="#">Истории</a>
                        </div>
                    </li>
                    <li className="category">
                        <div className="category__inner">
                            <img className="category__icon" src={Ufo} alt="sidebar icon"></img>
                            <a className="category__text" href="#">НЛО</a>
                        </div>
                    </li>
                    <li className="category">
                        <div className="category__inner">
                            <img className="category__icon" src={Space} alt="sidebar icon"></img>
                            <a className="category__text" href="#">Космос</a>
                        </div>
                    </li>
                    <li className="category">
                        <div className="category__inner">
                            <img className="category__icon" src={Planets} alt="sidebar icon"></img>
                            <a className="category__text" href="#">Планеты</a>
                        </div>
                    </li>
                    <li className="category">
                        <div className="category__inner">
                            <img className="category__icon" src={Missions} alt="sidebar icon"></img>
                            <a className="category__text" href="#">Миссии</a>
                        </div>
                    </li>
                </ul>

                <div className="social__share">Поделиться</div>
                <ul className="social">
                    <li className="social__item">
                        <a className="social__link" href="#" target="_blank">
                            <img className="social__img" src={IconTwitter} alt="twitter"></img>
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="social__link" href="#" target="_blank">
                            <img className="social__img" src={IconFacebook} alt="vk"></img>
                        </a>
                    </li>
                    <li className="social__item">
                        <a className="social__link" href="#" target="_blank">
                            <img className="social__img" src={IconVk} alt="pinterest"></img>
                        </a>
                    </li>
                </ul>
            </aside>

            <main className="main">
                <div className="container">

                    <article className="post">
                        <div className="post__header">
                            <a href="#">
                                <img className="post__preview" src={Post} alt=""></img>
                            </a>
                        </div>

                        <div className="post__content">
                            <h2 className="post__title">
                                <div className="post__caption">Как писать код быстро и безболезненно?</div>
                            </h2>
                            <p className="post__text">Галактика Андромеды — спиральная галактика, наблюдаемая в созвездии Андромеды. Эта галактика приблизительно вдвое больше нашей галактики в диаметре, содержит в несколько раз больше звёзд и удалена от неё на расстояние порядка 800 килопарсек.</p>
                        </div>

                        <div className="post__footer">
                            <ul className="post__data">
                                <li className="post__data-item">
                                    <time dateTime="2022-05-1 23:50">01.05.2022</time>
                                </li>
                                <li className="post__data-item">
                                    <div>Все</div>
                                </li>
                            </ul>
                            <a className="post__read" href="#">читать</a>
                        </div>
                    </article>

                    <article className="post">
                        <div className="post__header">
                            {/* <a href="#">
                                <img className="post__preview" src={Post} alt=""></img>
                            </a> */}
                        </div>

                        <div className="post__content">
                            <h2 className="post__title">
                                <div className="post__caption">Как писать код быстро и безболезненно?</div>
                            </h2>
                            <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis repellat fuga ullam est expedita quasi magni exercitationem hic earum possimus, provident quae perferendis, voluptate veniam et modi asperiores libero!</p>
                        </div>

                        <div className="post__footer">
                            <ul className="post__data">
                                <li className="post__data-item">
                                    <time dateTime="2022-05-1 23:50">01.05.2022</time>
                                </li>
                                <li className="post__data-item">
                                    <div>Истории</div>
                                </li>
                            </ul>
                            <a className="post__read" href="#">читать</a>
                        </div>
                    </article>

                    <article className="post">
                        <div className="post__header">
                            <a href="#">
                                <img className="post__preview" src={Post2} alt=""></img>
                            </a>
                        </div>

                        <div className="post__content">
                            <h2 className="post__title">
                                <div className="post__caption">Как писать код быстро и безболезненно?</div>
                            </h2>
                            <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis repellat fuga ullam est expedita quasi magni exercitationem hic earum possimus, provident quae perferendis, voluptate veniam et modi asperiores libero!</p>
                        </div>

                        <div className="post__footer">
                            <ul className="post__data">
                                <li className="post__data-item">
                                    <time dateTime="2022-05-1 23:50">01.05.2022</time>
                                </li>
                                <li className="post__data-item">
                                    <div>НЛО</div>
                                </li>
                            </ul>
                            <a className="post__read" href="#">читать</a>
                        </div>
                    </article>

                </div>
            </main>
        </div>
    );
}

export default App;

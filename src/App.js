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
                                    <a className="nav__link" href="#">Отзывы</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="#">Реклама</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="toggleWrapper">
                        <input type="checkbox"  className="dn" id="dn" />
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

                    {/* <article className="post">
                        <div className="post__header">
                            <a href="#">
                                <img className="post__preview" src={Post} alt=""></img>
                            </a>
                        </div>

                        <div className="post__content">
                            <h2 className="post__title">
                                <div className="post__caption">Как писать код быстро и безболезненно?</div>
                            </h2>
                            <p className="post__description">Галактика Андромеды — спиральная галактика, наблюдаемая в созвездии Андромеды. Эта галактика приблизительно вдвое больше нашей галактики в диаметре, содержит в несколько раз больше звёзд и удалена от неё на расстояние порядка 800 килопарсек.</p>
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

                            
                            <div className="post__like"> 
                                <div className="post__like__count">2</div>  

                                <input type="checkbox" id="checkbox" />
                                <label htmlFor="checkbox">
                                    <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group" fill="none" fillRule="evenodd" transform="translate(467 392)">
                                            <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#828282" />
                                            <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5" />

                                            <g id="grp7" opacity="0" transform="translate(7 6)">
                                                <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                                                <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                                            </g>

                                            <g id="grp6" opacity="0" transform="translate(0 28)">
                                                <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                                                <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                                            </g>

                                            <g id="grp3" opacity="0" transform="translate(52 28)">
                                                <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                                                <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                                            </g>

                                            <g id="grp2" opacity="0" transform="translate(44 6)">
                                                <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                                                <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                                            </g>

                                            <g id="grp5" opacity="0" transform="translate(14 50)">
                                                <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                                                <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                                            </g>

                                            <g id="grp4" opacity="0" transform="translate(35 50)">
                                                <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                                                <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                                            </g>

                                            <g id="grp1" opacity="0" transform="translate(24)">
                                                <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                                                <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                                            </g>
                                        </g>
                                    </svg>
                                </label>
                            </div>


                        </div>
                    </article>

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
                            <p className="post__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis repellat fuga ullam est expedita quasi magni exercitationem hic earum possimus, provident quae perferendis, voluptate veniam et modi asperiores libero!</p>
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
                            <p className="post__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facilis repellat fuga ullam est expedita quasi magni exercitationem hic earum possimus, provident quae perferendis, voluptate veniam et modi asperiores libero!</p>
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

                    <ul className="pagination">
                        <li className="pagination__item">
                            <a className="pagination__link" href="#">&lt;</a>
                        </li>
                        <li className="pagination__item">
                            <a className="pagination__link" href="#">1</a>
                        </li>
                        <li className="pagination__item">
                            <a className="pagination__link  pagination__link--active" href="#">2</a>
                        </li>
                        <li className="pagination__item">
                            <a className="pagination__link" href="#">3</a>
                        </li>
                        <li className="pagination__item">
                            <a className="pagination__link" href="#">&gt;</a>
                        </li>
                    </ul> */}



                    <article className="post">
                        <div className="post__actions">
                            <a href="#">вернуться назад</a>
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
                                    <img src={Post} alt=""></img>
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

                </div>
            </main>
        </div>
    );
}

export default App;

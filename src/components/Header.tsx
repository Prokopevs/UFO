import React from "react"
import { Link } from "react-router-dom";
import { Galaxy } from '../pictures'


function Header() {

    return(
        <header className="header">
                <div className="header__wrapper">
                    <div className="header__inner">
                    <Link to="/" className="header__link">
                        <img className="header__logo" src={String(Galaxy)} alt="ufo logo"></img>
                        <div className="header__name">LANIAKEA</div>
                    </Link>

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
    )
}

export default Header;

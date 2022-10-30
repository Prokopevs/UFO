import React from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { Galaxy } from "../pictures"
import { filterSlice } from "../store/reducers/FilterSlice"
import { fetchInteresting } from "../store/reducers/InterestingSlice"
import { postSlice } from "../store/reducers/PostSlice"
import Progress from "./ProgressBar/Progress"
import Burger from "./sidebarComponents/Burger"

const Header = ({ changeTheme, dark, setBurger, burger }) => {
    const dispatch = useAppDispatch()
    const { setCategory } = filterSlice.actions
    const { setCurrentPage, setPortionNumber, setFlag } = postSlice.actions
    const { isLoading, key } = useAppSelector((state) => state.postReducer)
    const { category } = useAppSelector((state) => state.filterReducer)
    const { articleIsLoading, queryFromRecommend } = useAppSelector(
        (state) => state.ArticleReducer
    )

    React.useEffect(() => {
        document.title = "LANIAKEA"
        dispatch(fetchInteresting())
    }, [])

    const onClickCategory = () => {
        if (category === null) {
            // если выбрали ту же категорию на которой находимся, всё равно делать запрос на сервер
            dispatch(setFlag())
        }
        dispatch(setCurrentPage(1)) // выбирая категорию пагинация начинается с 1
        dispatch(setPortionNumber(1)) // Установить номер порции пагинации в 1
        dispatch(setCategory(null)) //выбираем категорию(все, популярное...)
        window.scrollTo(0, 0)
    }

    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__inner">
                    <Link
                        to="/ufo/"
                        className="header__link"
                        onClick={() => onClickCategory()}
                    >
                        <img
                            className="header__logo"
                            src={String(Galaxy)}
                            alt="ufo logo"
                        ></img>
                        <p className="header__name">LANIAKEA</p>
                    </Link>
                </div>

                <div className="header__burger">
                    <Burger setBurger={setBurger} burger={burger} />

                    <div className="toggleWrapper">
                        <input
                            type="checkbox"
                            checked={dark}
                            className="dn"
                            id="dn"
                            onChange={() => changeTheme()}
                        />
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
            </div>

            {!queryFromRecommend && (
                <Progress
                    isAnimating={articleIsLoading}
                    animationDuration={300}
                    incrementDuration={50}
                    key={key + "1"}
                />
            )}

            <Progress
                isAnimating={isLoading}
                animationDuration={300}
                incrementDuration={50}
                key={key}
            />
        </header>
    )
}

export default Header

import React from "react"
import Categories from "./Categories"
import { All, logoPopular, IconGalaxy, Ufo, Space, Planets, Missions } from "../../pictures"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { filterSlice } from "../../store/reducers/FilterSlice"
import { Link } from "react-router-dom"
import { postSlice } from "../../store/reducers/PostSlice"
import { animateScroll as scroll, scroller } from "react-scroll"
import {
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
    VKIcon,
    VKShareButton,
} from "react-share"

const categoryNames = [
    { name: "Популярное", icon: logoPopular },
    { name: "Галактики", icon: IconGalaxy },
    { name: "НЛО", icon: Ufo },
    { name: "Космос", icon: Space },
    { name: "Планеты", icon: Planets },
    { name: "Миссии", icon: Missions },
]

const Sidebar = ({ burger, setBurger, isMobile }) => {
    const dispatch = useAppDispatch()
    const { setCategory } = filterSlice.actions
    const { category } = useAppSelector((state) => state.filterReducer)
    const { setCurrentPage, setFlag, setPortionNumber } = postSlice.actions
    const shareUrl = "https://"

    const scrollTo = () => {
        scroller.scrollTo("top", {
            duration: 1000,
            delay: 200,
            smooth: "easeInOutQuart",
        })
    }

    const onSelectCategory = (index: number | null) => {
        if (index === category) {
            // если выбрали ту же категорию на которой находимся, всё равно делать запрос на сервер
            dispatch(setFlag())
            scrollTo()
        }
        dispatch(setCurrentPage(1)) // выбирая категорию пагинация начинается с 1
        dispatch(setPortionNumber(1)) // Установить номер порции пагинации в 1
        dispatch(setCategory(index)) //выбираем категорию(все, популярное...)
        if (isMobile) {
            setBurger(false)
        }
    }

    return (
        <aside className={burger ? "sidebar active" : "sidebar"}>
            <Link to="/ufo" className="post__link">
                <Categories
                    items={categoryNames}
                    all={All}
                    onClickCategory={onSelectCategory}
                    activeCategory={category}
                />
            </Link>

            <div className="social__share">Поделиться</div>
            <div className="social">
                <RedditShareButton url={shareUrl}>
                    <RedditIcon size={27} round={true} className="social__link" />
                </RedditShareButton>

                <VKShareButton url={shareUrl}>
                    <VKIcon size={27} round={true} className="social__link" />
                </VKShareButton>

                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={27} round={true} className="social__link" />
                </TwitterShareButton>
            </div>
        </aside>
    )
}

export default Sidebar

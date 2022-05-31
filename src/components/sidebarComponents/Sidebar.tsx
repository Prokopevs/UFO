import React from "react"
import Categories from "./Categories"
import { All, logoPopular, IconGalaxy, Ufo, Space, Planets, Missions, IconTwitter, IconFacebook, IconVk } from '../../pictures'
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { filterSlice } from "../../store/reducers/FilterSlice";
import { Link } from "react-router-dom";
import { fetchPosts, postSlice } from "../../store/reducers/PostSlice";



const categoryNames = [
    { name: 'Популярное', icon: logoPopular },
    { name: 'Галактики', icon: IconGalaxy },
    { name: 'НЛО', icon: Ufo },
    { name: 'Космос', icon: Space },
    { name: 'Планеты', icon: Planets },
    { name: 'Миссии', icon: Missions }
];



const Sidebar = () => {
    const dispatch = useAppDispatch()
    const {setCategory} = filterSlice.actions
    const {category} = useAppSelector(state => state.filterReducer)
    const {setCurrentPage} = postSlice.actions
    // console.log(category)
 
    const onSelectCategory = (index: number) => {
        if (index===category) {      // если выбрали ту же категорию на которой находимся, всё равно делать запрос на сервер
            dispatch(fetchPosts(category))
        }
        dispatch(setCurrentPage(1)) // выбирая категорию пагинация начинается с 1
        dispatch(setCategory(index)) //выбираем категорию(все, популярное...)
    }

    return (
        <aside className="sidebar">
            <Link to="/" className='post__link'>
                <Categories 
                items={categoryNames}
                all={All}
                onClickCategory={onSelectCategory}
                activeCategory={category}
                />
            </Link>

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
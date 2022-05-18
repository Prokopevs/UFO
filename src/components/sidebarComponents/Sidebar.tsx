import React from "react"
import Categories from "./Categories"
import { All, logoPopular, IconHistory, Ufo, Space, Planets, Missions, IconTwitter, IconFacebook, IconVk } from '../../pictures'
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { filterSlice } from "../../store/reducers/FilterSlice";



const categoryNames = [
    { name: 'Популярное', icon: logoPopular },
    { name: 'Истории', icon: IconHistory },
    { name: 'НЛО', icon: Ufo },
    { name: 'Космос', icon: Space },
    { name: 'Планеты', icon: Planets },
    { name: 'Миссии', icon: Missions }
];



const Sidebar = () => {
    const dispatch = useAppDispatch()
    const {setCategory} = filterSlice.actions
    const {category} = useAppSelector(state => state.filterReducer)
 
    const onSelectCategory = (index: number) => {
        dispatch(setCategory(index))
    }

    return (
        <aside className="sidebar">

            <Categories 
            items={categoryNames}
            all={All}
            onClickCategory={onSelectCategory}
            activeCategory={category}
            />

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
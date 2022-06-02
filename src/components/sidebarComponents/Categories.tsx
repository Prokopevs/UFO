import React from 'react'
import  { ITopic }  from '../../models/ITopic'

interface ICategories {
    items: Array<ITopic>
    all: string 
    onClickCategory: (index: null | number) => void
    activeCategory: null | number
}

const Categories: React.FC<ICategories> = ({ items, all, onClickCategory, activeCategory }) => {
    return (
        <ul>
            <li className="category" onClick={() => onClickCategory(null)}>
                        <div className={activeCategory === null ? "category__inner category__inner--active" : "category__inner"}>
                            <img className="category__icon" src={all} alt="sidebar icon" ></img>
                            <a className="category__text" href="#">Все</a>
                        </div>
            </li>

            {items && 
                items.map((obj, index) => (
                    <li className="category" onClick={() => onClickCategory(index)} key={`${obj.name}_${index}`}>
                        <div className={activeCategory === index ? "category__inner category__inner--active" : "category__inner"}>
                            <img className="category__icon" src={obj.icon} alt="sidebar icon" ></img>
                            <a className="category__text" href="#">{obj.name}</a>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default Categories
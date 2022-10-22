import React from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { Galaxy } from '../pictures'
import { filterSlice } from "../store/reducers/FilterSlice"
import { fetchInteresting } from "../store/reducers/InterestingSlice"
import { fetchPosts, postSlice } from "../store/reducers/PostSlice"
import Progress from "./ProgressBar/Progress"

const Header = () => {
    const dispatch = useAppDispatch()
    const { setCategory } = filterSlice.actions
    const { setCurrentPage } = postSlice.actions
    const { isLoading, key } = useAppSelector(state => state.postReducer)
    const {category} = useAppSelector(state => state.filterReducer)

    React.useEffect(() => {
        document.title = "LANIAKEA"
        dispatch(fetchInteresting())
    }, [])

    const onClickCategory = () => {
        if (category===null) {      
            dispatch(fetchPosts(null))
        }
        dispatch(setCurrentPage(1)) // выбирая категорию пагинация начинается с 1
        dispatch(setCategory(null)) //выбираем категорию(все, популярное...)
    }
    
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__inner">
                    <Link to="/ufo" className="header__link" onClick={() => onClickCategory()}>
                        <img className="header__logo" src={String(Galaxy)} alt="ufo logo"></img>
                        <p className="header__name">LANIAKEA</p>
                    </Link>
                </div>

                <div className="toggleWrapper">
                    <input type="checkbox" className="dn" id="dn" />
                    <label htmlFor="dn" className="toggle" >
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
            <Progress isAnimating={isLoading} animationDuration={300} incrementDuration={50} key={key}/>
        </header>
    )
}

export default Header

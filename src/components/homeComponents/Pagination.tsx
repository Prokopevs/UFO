import React from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchPosts, postSlice } from "../../store/reducers/PostSlice"

interface IPagination {
    category: number
}

const Pagination: React.FC<IPagination> = ({ category }) => {
    const dispatch = useAppDispatch()
    const {totalCount, limit, currentPage, portionNumber} = useAppSelector(state => state.postReducer)
    const {setCurrentPage, setPortionNumber} = postSlice.actions

    const onPageChanged = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(fetchPosts(category, pageNumber, limit))
    }
    const onPortionChanged = (portionNumber: number) => {
        dispatch(setPortionNumber(portionNumber))
    }

    const pagesCount = Math.ceil(totalCount / limit); // all posts divide limit
    let pages: Array<number> = [];                    // 1 2 3 4 5...
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionSize = 3

    let portionCount = Math.ceil(pagesCount / portionSize)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
            <ul className="pagination">
                <li className="pagination__item">
                    <a className={portionNumber > 1 ? "pagination__link" : "pagination__link pagination__link--button"}
                    onClick={portionNumber > 1 ? () => {onPortionChanged(portionNumber - 1)} : () => {}} >&lt;</a>
                </li>

                {pages
                    .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map((p, index) => {
                        return (
                            <li className="pagination__item" key={index} onClick={() => onPageChanged(p)}>
                                <a className={currentPage === p ? "pagination__link  pagination__link--active" : "pagination__link"} >{p}</a>
                            </li>)
                })}
                
                <li className="pagination__item">
                    <a className={portionCount > portionNumber ? "pagination__link" : "pagination__link pagination__link--button"}
                    onClick={portionCount > portionNumber ? () => {onPortionChanged(portionNumber + 1)} : () => {}}>&gt;</a>
                </li>
            </ul>
    )
}

export default Pagination
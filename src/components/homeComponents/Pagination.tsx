import React from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { fetchPosts, postSlice } from "../../store/reducers/PostSlice"

interface IPagination {
    category: number
}

const Pagination: React.FC<IPagination> = ({ category }) => {
    const dispatch = useAppDispatch()
    const {totalCount, limit, currentPage} = useAppSelector(state => state.postReducer) // totalCount нужно сделать изменения в redux. И при получении response.totalCount при помощи AC изменять totalCount
    
    const {setCurrentPage} = postSlice.actions

    const onPageChanged = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(fetchPosts(category, pageNumber, limit))
    }

    const pagesCount = Math.ceil(totalCount / limit); // all posts divide limit
    let pages: Array<number> = [];                    // 1 2 3 4 5...
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionSize = 3

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = React.useState(1); // вынести в redux проблема когда переходишь на 4, 5 и затем выбираешь новую категорию он там и остается. Потом при переходе на новую категорию просто стбрасывать portionNumber на 1

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
            <ul className="pagination">
                <li className="pagination__item">
                    <a className={portionNumber > 1 ? "pagination__link" : "pagination__link pagination__link--button"}
                    onClick={portionNumber > 1 ? () => {setPortionNumber(portionNumber - 1)} : () => {}} >&lt;</a>
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
                    onClick={portionCount > portionNumber ? () => {setPortionNumber(portionNumber + 1)} : () => {}}>&gt;</a>
                </li>
            </ul>
     
    )
}

export default Pagination
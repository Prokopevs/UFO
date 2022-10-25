import React from "react"
import Blocks from "../components/homeComponents/Blocks"
import Pagination from "../components/homeComponents/Pagination"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { fetchPosts, postSlice } from "../store/reducers/PostSlice"
import qs from "qs"
import { useNavigate } from "react-router-dom"
import { UrlParams } from "../models/IPosts"
import { filterSlice } from "../store/reducers/FilterSlice"

const Home = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { posts, isLoading, currentPage, limit, flag } = useAppSelector(
        (state) => state.postReducer
    )
    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false)
    const { category } = useAppSelector((state) => state.filterReducer)
    const { setUrlPage } = postSlice.actions
    const { setUrlCategory } = filterSlice.actions

    const getPost = () => {
        dispatch(fetchPosts(category, currentPage))
    }

    // Парсим параметры при первом рендере и отправляем их в redux
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(
                window.location.search.substring(1)
            ) as unknown as UrlParams

            if (params.category) {
                dispatch(
                    setUrlCategory({
                        category: params.category,
                    })
                )
            }
            dispatch(
                setUrlPage({
                    page: params.page,
                    newFlag: flag,
                })
            )
            isSearch.current = true
        }
    }, [])

    React.useEffect(() => {
        if (!isSearch.current) {
            getPost()
        }
        isSearch.current = false
    }, [category, currentPage, flag])

    // Установить новый url при изменении категорий и страниц
    React.useEffect(() => {
        const page = currentPage
        let queryString

        if (isMounted.current) {
            if (category === null) {
                queryString = qs.stringify({
                    page,
                    limit,
                })
            } else {
                queryString = qs.stringify({
                    category,
                    page,
                    limit,
                })
            }
            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [category, currentPage, flag])

    return (
        <>
            <div className="post__none" id="top"></div>
            {posts.map((obj, index) => (
                <Blocks key={index} isLoading={isLoading} {...obj} />
            ))}

            <Pagination category={category} />
        </>
    )
}

export default Home

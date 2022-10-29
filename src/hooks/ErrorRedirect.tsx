import React from "react"
import { useNavigate } from "react-router-dom"
import { ArticleSlice } from "../store/reducers/ArticleSlice"
import { useAppDispatch } from "./redux"

export const ErrorRedirect = (error) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { setError } = ArticleSlice.actions

    React.useEffect(() => {
        if (error) {
            navigate("/ufo/error")
            dispatch(setError(false))
        }
    }, [error])
}
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { IPosts } from "../../models/IPosts"
import { ITotalCategories } from "../../models/ITotalCategories"
import { AppDispatch } from "../store"

interface PostState {
    posts: IPosts[]
    isLoading: boolean
    error: string
    limit: number
    currentPage: number
    portionNumber: number
    key: number
    totalCategories: ITotalCategories[]
}

const initialState: PostState = {
    posts: [],
    isLoading: false,
    error: '',
    limit: 3,
    currentPage: 1,
    portionNumber: 1,
    key: 0,
    totalCategories: [],
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postsFetching(state) {
            state.isLoading = true
            state.key = state.key ^ 1
            state.posts = []
        },
        postsFetchingSuccess(state, action: PayloadAction<IPosts[]>) {
            state.isLoading = false
            state.error = ''
            state.posts = action.payload
        },
        postsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload 
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setPortionNumber(state, action: PayloadAction<number>) {
            state.portionNumber = action.payload
        },  
        fetchTotalCategoriesSuccess(state, action: PayloadAction<ITotalCategories[]>) {
            state.totalCategories = action.payload
        }
    }
})

export const fetchPosts = (category: number | null, id: number | null = null, pageNumber=1, limit=3) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postsFetching())
        const response = await axios.get<IPosts[]>(`https://62811cdf7532b4920f77b2db.mockapi.io/posts/?${id !== null ? `id=${id}` : 
        category !== null ? `category=${category}` : ''}&${id !== null ? '' : `page=${pageNumber}&limit=${limit}`}`)
        const firstItemInArr = response.data.slice(0, 1)
        dispatch(postSlice.actions.postsFetchingSuccess(id === null ? response.data : firstItemInArr))
    } catch (e) {
        dispatch(postSlice.actions.postsFetchingError(e.message))
    }
}

export const fetchTotalCategories = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<ITotalCategories[]>(`https://62811cdf7532b4920f77b2db.mockapi.io/totalCategories`)
        dispatch(postSlice.actions.fetchTotalCategoriesSuccess(response.data))
    } catch (e) {
        dispatch(postSlice.actions.postsFetchingError(e.message))
    }
}

export default postSlice.reducer


import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { IPosts } from "../../models/IPosts"
import { AppDispatch } from "../store"

interface PostState {
    posts: IPosts[]
    isLoading: boolean
    error: string
    limit: number
    totalCount: number
    currentPage: number
}

const initialState: PostState = {
    posts: [],
    isLoading: false,
    error: '',
    limit: 3,
    totalCount: 15,
    currentPage: 1,
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postsFetching(state) {
            state.isLoading = true
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
        }
    }
})

export const fetchPosts = (category, pageNumber=1, limit=3 ) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postsFetching())
        const response = await axios.get<any>(`https://62811cdf7532b4920f77b2db.mockapi.io/posts/?${category !== null ? `category=${category}` : ''}&page=${pageNumber}&limit=${limit}`)
        dispatch(postSlice.actions.postsFetchingSuccess(response.data))
    } catch (e) {
        dispatch(postSlice.actions.postsFetchingError(e.message))
    }
}

export default postSlice.reducer


import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { IPosts } from "../../models/IPosts"
import { AppDispatch } from "../store"

interface PostState {
    posts: IPosts[]
    isLoading: boolean
    error: string
}

const initialState: PostState = {
    posts: [],
    isLoading: false,
    error: ''
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
    }
})

export const fetchPosts = (category) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postsFetching())
        const response = await axios.get<IPosts[]>(`https://62811cdf7532b4920f77b2db.mockapi.io/posts/?${category !== null ? `category=${category}` : ''}`)
        dispatch(postSlice.actions.postsFetchingSuccess(response.data))
    } catch (e) {
        dispatch(postSlice.actions.postsFetchingError(e.message))
    }
}

export default postSlice.reducer


import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getPost, getTotalCategories } from "../../http/getPost"
import { IPosts, UrlParams } from "../../models/IPosts"
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
    flag: boolean
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
    flag: false,
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postsFetching(state) {
            state.isLoading = true
            state.key = state.key ^ 1
            // state.posts = []
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
        },
        setUrlPage(state, action: PayloadAction<UrlParams>) {
            if(action.payload.page) {
                state.currentPage = Number(action.payload.page)
            }
            if(action.payload.newFlag === false) {
                state.flag = !state.flag
            } else if (action.payload.newFlag === true) {
                state.flag = !state.flag
            }
        },
        setFlag(state) {
            state.flag = !state.flag
        },
    }
})

export const fetchPosts = (category: number | null, id: number | null = null, pageNumber=1, limit=3) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postsFetching())
        const response = await getPost(category, id, pageNumber, limit)
        const firstItemInArr = response.data.slice(0, 1)
        dispatch(postSlice.actions.postsFetchingSuccess(id === null ? response.data : firstItemInArr))
    } catch (e) {
        dispatch(postSlice.actions.postsFetchingError(e.message))
    }
}

export const fetchTotalCategories = () => async (dispatch: AppDispatch) => {
    try {
        const response = await getTotalCategories()
        dispatch(postSlice.actions.fetchTotalCategoriesSuccess(response.data))
    } catch (e) {
        dispatch(postSlice.actions.postsFetchingError(e.message))
    }
}

export default postSlice.reducer


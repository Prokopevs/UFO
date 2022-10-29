import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getPost, getTotalCategories } from "../../http/getPost"
import { IArticle } from "../../models/IArticle"
import { UrlParams } from "../../models/IPosts"
import { ITotalCategories } from "../../models/ITotalCategories"
import { AppDispatch } from "../store"

interface PostState {
    posts: IArticle[]
    isLoading: boolean
    error: string
    limit: number
    currentPage: number
    portionNumber: number
    key: number
    totalCategories: ITotalCategories[]
    flag: boolean
    successFetch: boolean
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
    successFetch: false
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postsFetching(state) {
            state.isLoading = true
            state.key = state.key ^ 1
        },
        postsFetchingSuccess(state, action: PayloadAction<IArticle[]>) {
            state.isLoading = false
            state.error = ''
            state.posts = action.payload
            state.successFetch = true
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
        // setSuccessFetch(state, action: PayloadAction<boolean>) {
        //     state.successFetch = action.payload
        // }
    }
})

export const fetchPosts = (category: number | null, pageNumber=1, limit=3, ) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postsFetching())
        const response = await getPost(category, pageNumber, limit)
        dispatch(postSlice.actions.postsFetchingSuccess(response.data))
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


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticles } from './../../models/IArticles';
import { AppDispatch } from "../store"
import axios from 'axios';

interface ArticleState {
    article: IArticles[]
    isLoading: boolean
    error: string
}

const initialState: ArticleState = {
    article: [],
    isLoading: false,
    error: ''
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        articleFetching(state) {
            state.isLoading = true
        },
        articleFetchingSuccess(state, action: PayloadAction<IArticles[]>) {
            state.isLoading = false
            state.error = ''
            state.article = action.payload
        },
        articleFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const fetchArticle = (id) => async (dispatch: AppDispatch) => {
    try {
        dispatch(articleSlice.actions.articleFetching())
        const response = await axios.get<IArticles[]>(`https://62811cdf7532b4920f77b2db.mockapi.io/articles/?${`id=${id}`}`)
        const firstItemInArr = response.data.slice(0, 1) // убрать когда будет правильный backend
        dispatch(articleSlice.actions.articleFetchingSuccess(firstItemInArr))
    } catch (e) {
        dispatch(articleSlice.actions.articleFetchingError(e.message))
    }
}

export default articleSlice.reducer

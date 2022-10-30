import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postReducer from './reducers/PostSlice'
import filterReducer from './reducers/FilterSlice'
import interestingReducer from './reducers/InterestingSlice'
import ArticleReducer from './reducers/ArticleSlice'

const reducers = combineReducers({
    postReducer,
    filterReducer,
    interestingReducer,
    ArticleReducer,
})

export const store = configureStore({
    reducer: {
        postReducer,
        filterReducer,
        interestingReducer,
        ArticleReducer,
    }
})

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
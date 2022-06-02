import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storageSession from 'redux-persist/lib/storage/session'
import postReducer from './reducers/PostSlice'
import filterReducer from './reducers/FilterSlice'
import articleReducer from './reducers/ArticleSlice'

import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist'
import { persistCombineReducers } from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1'

const persistConfig = {
    key: 'root',
    storage: storageSession,
    stateReconciler: autoMergeLevel1,
    blacklist: ['totalCount']
}

const reducers = combineReducers({
    postReducer,
    filterReducer,
    articleReducer
})

const _persistedReducer = persistCombineReducers(
    persistConfig,
    {
        postReducer,
        filterReducer,
        articleReducer
    }
)

export const store = configureStore({
    reducer: _persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
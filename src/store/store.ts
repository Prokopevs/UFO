import { combineReducers, configureStore } from '@reduxjs/toolkit'
import postReducer from './reducers/PostSlice'
import filterReducer from './reducers/FilterSlice'
import interestingReducer from './reducers/InterestingSlice'

import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist'
import { persistCombineReducers } from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import storageSession from 'redux-persist/lib/storage/session'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1'

// const rootPersistConfig = {
//     key: 'root',
//     storage: storageSession,
//     stateReconciler: autoMergeLevel1,
//     // blacklist: ['filterReducer']
// }

const reducers = combineReducers({
    postReducer,
    filterReducer,
    interestingReducer
})

export const store = configureStore({
    reducer: {
        postReducer,
        filterReducer,
        interestingReducer
    }
});

// const _persistedReducer = persistCombineReducers(
//     rootPersistConfig,
//     {
//         postReducer,
//         filterReducer,
//         interestingReducer
//     }
// )

// export const store = configureStore({
//     reducer: _persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// })

// export const persistor = persistStore(store)

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof store.dispatch
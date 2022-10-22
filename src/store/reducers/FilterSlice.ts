import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UrlParams } from "../../models/IPosts"

interface PostState {
    category: number | null  
}

const initialState: PostState = {
    category: null
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<number | null>) {
            state.category = action.payload
        },
        setUrlCategory(state, action: PayloadAction<UrlParams>) {
            if(action.payload.category) {
                state.category = Number(action.payload.category)
            }
        },
    }
})

export default filterSlice.reducer

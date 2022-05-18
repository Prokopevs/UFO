import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PostState {
    category: null | number
}

const initialState: PostState = {
    category: null
}


export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<null | number>) {
            state.category = action.payload
        }
    }
})

export default filterSlice.reducer

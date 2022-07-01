import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
        }
    }
})

export default filterSlice.reducer

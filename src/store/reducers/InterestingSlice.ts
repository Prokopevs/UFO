import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInteresting } from '../../models/IInteresting'
import { AppDispatch } from "../store"
import axios from 'axios';
import { getInteresting } from '../../http/getInteresting';

interface InterestingState {
    interesting: IInteresting[]
    isLoading: boolean
    error: string
}

const initialState: InterestingState = {
    interesting: [],
    isLoading: false,
    error: ''
}

export const interestingSlice = createSlice({
    name: 'interesting',
    initialState,
    reducers: {
        interestingFetching(state) {
            state.isLoading = true
        },
        interestingFetchingSuccess(state, action: PayloadAction<IInteresting[]>) {
            state.isLoading = false
            state.error = ''
            state.interesting = action.payload
        },
        interestingFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const fetchInteresting = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(interestingSlice.actions.interestingFetching())
        const response = await getInteresting()
        dispatch(interestingSlice.actions.interestingFetchingSuccess(response.data))
    } catch (e) {
        dispatch(interestingSlice.actions.interestingFetchingError(e.message))
    }
}

export default interestingSlice.reducer

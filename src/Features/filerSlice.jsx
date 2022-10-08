import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    type: "drink",
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setType : (state, action) => {
            state.type = action.payload
        }
    }
})

export default filterSlice.reducer
export const { setType } = filterSlice.actions
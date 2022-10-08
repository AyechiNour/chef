import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bool: false,
}

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setbool : (state) => {
            state.bool = !state.bool
        }
    }
})

export default bookingSlice.reducer
export const { setbool } = bookingSlice.actions
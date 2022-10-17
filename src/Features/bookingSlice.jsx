import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    boolNavbar: false,
    boolFooter: false,
}
export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setboolNavbar: (state) => {
            state.boolNavbar = !state.boolNavbar
        },
        setboolFooter: (state) => {
            state.boolFooter = !state.boolFooter
        }
    }
})
export default bookingSlice.reducer
export const { setboolNavbar, setboolFooter } = bookingSlice.actions
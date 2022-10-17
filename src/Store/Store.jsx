import { configureStore } from '@reduxjs/toolkit'
import chefreducer from '../Features/chefSlice'
import platreducer from '../Features/platSlice'
import bookingreducer from '../Features/bookingSlice'

const Store = configureStore({
    reducer: {
        chefs: chefreducer,
        plats: platreducer,
        booking: bookingreducer,
    }
})
export default Store;
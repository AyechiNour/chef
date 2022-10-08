import { configureStore } from '@reduxjs/toolkit'
import chefreducer from '../Features/chefSlice'
import platreducer from '../Features/platSlide'
import bookingreducer from '../Features/bookingSlice'
import filterreducer from '../Features/filerSlice'

const Store = configureStore({
    reducer: {
        chefs: chefreducer,
        plats: platreducer,
        booking : bookingreducer,
        filter : filterreducer,
    }
})

export default Store;
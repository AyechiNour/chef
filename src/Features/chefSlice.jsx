import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chefsInfo: [
        {
            name: "Gordon Ramsay",
            imgpath: "/images/PhotoChef1.png",
            rate: 4
        },
        {
            name: "Jamie Oliver",
            imgpath: "/images/PhotoChef2.png",
            rate: 5
        },
        {
            name: "Michael Caines",
            imgpath: "/images/PhotoChef3.png",
            rate: 4
        },
        {
            name: "Gordon Ramsay",
            imgpath: "/images/PhotoChef1.png",
            rate: 1
        },
        {
            name: "Jamie Oliver",
            imgpath: "/images/PhotoChef2.png",
            rate: 2
        },
        {
            name: "Michael Caines",
            imgpath: "/images/PhotoChef3.png",
            rate: 3
        }
    ],
    topThreeChefs : [],
}

export const chefSlice = createSlice({
    name: "chefs",
    initialState,
    reducers: {
        topThreeChef:(state)=>{
            state.topThreeChefs = state.chefsInfo.sort((a, b) => a.rate < b.rate ? 1 : -1).slice(0, 3)
        }
    }
})

export const { topThreeChef } = chefSlice.actions
export default chefSlice.reducer
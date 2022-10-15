import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    platInfo: [
        {
            name: "Breakfast",
            price: "75",
            imgPath: "/images/breakfast1.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type: 'breakfast'
        },
        {
            name: "Drink",
            price: "57",
            imgPath: "/images/drink1.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'drink'
        },
        {
            name: "Fast Food",
            price: "30",
            imgPath: "/images/FastFood1.png",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'fast food'
        },
        {
            name: "Dish",
            price: "30",
            imgPath: "/images/dish1.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'dish'
        },
        {
            name: "Healthy Food",
            price: "30",
            imgPath: "/images/healthy1.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'healthy food'
        },
        {
            name: "Breakfast",
            price: "30",
            imgPath: "/images/breakfast3.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'breakfast'
        },
        {
            name: "Breakfast",
            price: "75",
            imgPath: "/images/breakfast4.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type: 'breakfast'
        },
        {
            name: "Breakfast",
            price: "57",
            imgPath: "/images/breakfast5.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type: 'breakfast'
        },
        {
            name: "Breakfast",
            price: "30",
            imgPath: "/images/breakfast6.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'breakfast'
        },
        {
            name: "Breakfast",
            price: "75",
            imgPath: "/images/breakfast7.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type: 'breakfast'
        },
        {
            name: "Breakfast",
            price: "57",
            imgPath: "/images/breakfast8.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'breakfast'
        },
        {
            name: "Breakfast",
            price: "30",
            imgPath: "/images/breakfast9.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'breakfast'
        },
        {
            name: "Breakfast",
            price: "75",
            imgPath: "/images/breakfast10.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type: 'breakfast'
        },
        {
            name: "Breakfast",
            price: "57",
            imgPath: "/images/breakfast11.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type: 'breakfast'
        },
        {
            name: "Breakfast",
            price: "30",
            imgPath: "/images/breakfast12.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'breakfast'
        },
        {
            name: "Breakfast",
            price: "75",
            imgPath: "/images/breakfast13.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type: 'breakfast'
        },
        {
            name: "Breakfast",
            price: "30",
            imgPath: "/images/breakfast14.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'breakfast'
        },
        {
            name: "Breakfast",
            price: "75",
            imgPath: "/images/breakfast15.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type: 'breakfast'
        },
        {
            name: "Breakfast",
            price: "57",
            imgPath: "/images/breakfast2.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'breakfast'
        },
        {
            name: "Drink",
            price: "30",
            imgPath: "/images/drink2.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'drink'
        },
        {
            name: "Drink",
            price: "75",
            imgPath: "/images/drink3.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type: 'drink'
        },
        {
            name: "Drink",
            price: "57",
            imgPath: "/images/drink4.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type: 'drink'
        },
        {
            name: "Drink",
            price: "30",
            imgPath: "/images/drink5.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'drink'
        }, {
            name: "Drink",
            price: "75",
            imgPath: "/images/drink6.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type: 'drink'
        },
        {
            name: "Drink",
            price: "57",
            imgPath: "/images/drink7.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'drink'
        },
        {
            name: "Drink",
            price: "30",
            imgPath: "/images/drink8.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'drink'
        },
        {
            name: "Drink",
            price: "75",
            imgPath: "/images/drink9.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type: 'drink'
        },
        {
            name: "Drink",
            price: "57",
            imgPath: "/images/drink10.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type: 'drink'
        },
        {
            name: "Drink",
            price: "30",
            imgPath: "/images/drink11.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'drink'
        },
        {
            name: "Drink",
            price: "75",
            imgPath: "/images/drink12.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type: 'drink'
        },
        {
            name: "Drink",
            price: "57",
            imgPath: "/images/drink13.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'drink'
        },
        {
            name: "Drink",
            price: "57",
            imgPath: "/images/drink14.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'drink'
        },
        {
            name: "Drink",
            price: "57",
            imgPath: "/images/drink15.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'drink'
        },
        {
            name: "Fast Food",
            price: "75",
            imgPath: "/images/FastFood2.png",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type: 'fast food'
        },
        {
            name: "Fast Food",
            price: "57",
            imgPath: "/images/FastFood3.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type: 'fast food'
        },
        {
            name: "Fast Food",
            price: "30",
            imgPath: "/images/FastFood4.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'fast food'
        },
        {
            name: "Fast Food",
            price: "75",
            imgPath: "/images/FastFood5.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type: 'fast food'
        },
        {
            name: "Fast Food",
            price: "57",
            imgPath: "/images/FastFood6.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'fast food'
        },
        {
            name: "Fast Food",
            price: "30",
            imgPath: "/images/FastFood7.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'fast food'
        },
        {
            name: "Fast Food",
            price: "75",
            imgPath: "/images/FastFood8.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type: 'fast food'
        },
        {
            name: "Fast Food",
            price: "57",
            imgPath: "/images/FastFood9.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type: 'fast food'
        },
        {
            name: "Fast Food",
            price: "30",
            imgPath: "/images/FastFood10.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'fast food'
        },
        {
            name: "Fast Food",
            price: "30",
            imgPath: "/images/FastFood11.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'fast food'
        },
        {
            name: "Fast Food",
            price: "30",
            imgPath: "/images/FastFood12.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'fast food'
        },
        {
            name: "Fast Food",
            price: "30",
            imgPath: "/images/FastFood13.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'fast food'
        },
        {
            name: "Fast Food",
            price: "30",
            imgPath: "/images/FastFood14.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'fast food'
        },
        {
            name: "Fast Food",
            price: "30",
            imgPath: "/images/FastFood15.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'fast food'
        },
        {
            name: "Dish",
            price: "75",
            imgPath: "/images/dish2.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type: 'dish'
        },
        {
            name: "Dish",
            price: "57",
            imgPath: "/images/dish3.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type: 'dish'
        },
        {
            name: "Dish",
            price: "30",
            imgPath: "/images/dish4.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'dish'
        },
        {
            name: "Dish",
            price: "75",
            imgPath: "/images/dish5.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type: 'dish'
        },
        {
            name: "Dish",
            price: "57",
            imgPath: "/images/dish6.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'dish'
        },
        {
            name: "Dish",
            price: "30",
            imgPath: "/images/dish7.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'dish'
        },
        {
            name: "Dish",
            price: "75",
            imgPath: "/images/dish8.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type: 'dish'
        },
        {
            name: "Dish",
            price: "57",
            imgPath: "/images/dish9.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type: 'dish'
        },
        {
            name: "Dish",
            price: "30",
            imgPath: "/images/dish10.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'dish'
        },
        {
            name: "Dish",
            price: "30",
            imgPath: "/images/dish11.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'dish'
        },
        {
            name: "Dish",
            price: "30",
            imgPath: "/images/dish12.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'dish'
        },
        {
            name: "Dish",
            price: "30",
            imgPath: "/images/dish13.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'dish'
        },
        {
            name: "Dish",
            price: "30",
            imgPath: "/images/dish14.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'dish'
        },
        {
            name: "Dish",
            price: "30",
            imgPath: "/images/dish15.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'dish'
        },
        {
            name: "Healthy Food",
            price: "75",
            imgPath: "/images/healthy2.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type: 'healthy food'
        },
        {
            name: "Healthy Food",
            price: "57",
            imgPath: "/images/healthy3.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type: 'healthy food'
        },
        {
            name: "Healthy Food",
            price: "30",
            imgPath: "/images/healthy4.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'healthy food'
        },
        {
            name: "Healthy Food",
            price: "75",
            imgPath: "/images/healthy5.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type: 'healthy food'
        },
        {
            name: "Healthy Food",
            price: "57",
            imgPath: "/images/healthy6.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'healthy food'
        },
        {
            name: "Healthy Food",
            price: "30",
            imgPath: "/images/healthy7.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type: 'healthy food'
        },
        {
            name: "Healthy Food",
            price: "75",
            imgPath: "/images/healthy8.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type: 'healthy food'
        },
        {
            name: "Healthy Food",
            price: "57",
            imgPath: "/images/healthy9.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type: 'healthy food'
        },
        {
            name: "Healthy Food",
            price: "30",
            imgPath: "/images/healthy10.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'healthy food'
        },
        {
            name: "Healthy Food",
            price: "30",
            imgPath: "/images/healthy11.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'healthy food'
        },
        {
            name: "Healthy Food",
            price: "30",
            imgPath: "/images/healthy12.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'healthy food'
        },
        {
            name: "Healthy Food",
            price: "30",
            imgPath: "/images/healthy13.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'healthy food'
        },
        {
            name: "Healthy Food",
            price: "30",
            imgPath: "/images/healthy14.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'healthy food'
        },
        {
            name: "Healthy Food",
            price: "30",
            imgPath: "/images/healthy15.jpg",
            description: "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type: 'healthy food'
        }
    ],
    topTenPlat: [],
    filterPlat: [],
    filterOption: "all",
    itemOffset:0,
    pageCount:0,
}

export const platSlice = createSlice({
    name: "plat",
    initialState,
    reducers: {
        topTenPlats: (state) => {
            state.topTenPlat = state.platInfo.sort((a, b) => a.rate < b.rate ? 1 : -1).slice(0, 11)
        },
        filterVar: (state, action) => {
            state.filterOption = action.payload
        },
        filterPlat: (state) => {
            if (state.filterOption == "all") {
                state.filterPlat = state.platInfo
            } else {
                state.filterPlat = state.platInfo.filter(plat => plat.type === state.filterOption)
            }
        },
        setItemOffset: (state,action) => {
            state.itemOffset = action.payload
        },
        setPageCount : (state) => {}
    }
})

export default platSlice.reducer
export const { topTenPlats, filterVar, filterPlat , setItemOffset} = platSlice.actions
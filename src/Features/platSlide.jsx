import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    platInfo: [
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type : 'drink'
        },
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type : 'drink'
        },
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type : 'drink'
        },
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type : 'fast food'
        }, 
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type : 'fast food'
        }, 
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type : 'fast food'
        },
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type : 'fast food'
        },
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type : 'fast food'
        },
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type : 'fast food'
        },
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type : 'fast food'
        }, 
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type : 'fast food'
        }, 
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type : 'fast food'
        },
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type : 'fast food'
        },
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type : 'fast food'
        },
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type : 'fast food'
        },
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type : 'fast food'
        }, 
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type : 'fast food'
        }, 
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type : 'fast food'
        },{
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type : 'fast food'
        },
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type : 'fast food'
        },
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type : 'fast food'
        },
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type : 'fast food'
        }, 
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type : 'fast food'
        }, 
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type : 'fast food'
        },
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type : 'fast food'
        },
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type : 'fast food'
        },
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type : 'fast food'
        },
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type : 'fast food'
        }, 
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type : 'fast food'
        }, 
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type : 'fast food'
        },
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 5,
            type : 'fast food'
        },
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type : 'fast food'
        },
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 4,
            type : 'fast food'
        },
        {
            name: "Indian Curry",
            price: "75",
            imgPath: "/images/dish1.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 3,
            type : 'fast food'
        }, 
        {
            name: "Rougail Saucisse",
            price: "57",
            imgPath: "/images/dish2.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 2,
            type : 'fast food'
        }, 
        {
            name: "Oeuf Cocotte",
            price: "30",
            imgPath: "/images/dish3.png",
            description : "beef, roast, leaves, lime, corriander, onion",
            rate: 1,
            type : 'fast food'
        }
    ]
}

export const platSlice = createSlice({
    name: "plat",
    initialState,
    reducers: {
        topThree : (state) => {
            return (
                state.filter (plat => plat.rate > 3)
                )
        }
    }
})

export default platSlice.reducer
export const { topThree } = platSlice.actions
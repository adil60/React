import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state , action) => {
            state.items.push(action.payload)
        },
        removeItem : (state) => {
            state.items.pop()
        },
        clearItems : (state) => {

            // React ToolKit says either mutate the existing state or return a new state
            // mutate the existing state 
              // -> state.items.length = [];
            // or return a new state => the empty returned array will be replaced with state
                return { items:[]}; // this new object will be replaced inside originalState = []
            
        }
    }
})

export const { addItem , removeItem, clearItems} =  cartSlice.actions;

export default cartSlice.reducer;
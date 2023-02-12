import { createSlice } from "@reduxjs/toolkit";
;


const itemSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItems(state, action) {
            const newItem = action.payload;
            const existingItems = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItems) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: newItem.quantity,
                    totalPrice: newItem.price,
                    name: newItem.title

                })
            } else {
                existingItems.quantity = existingItems.quantity + 1;
                existingItems.totalPrice = existingItems.totalPrice + newItem.price;

            }

        },
        removeItems(state, action) {
            //delete by id
            const id = action.payload;
            //check id is there are not
            const existingItems = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItems.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItems.quantity--;
                existingItems.totalPrice = existingItems.totalPrice - existingItems.price;

            }
          }

    }
  })



export const itemAcions = itemSlice.actions;
export default itemSlice.reducer;

 
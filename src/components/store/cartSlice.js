import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: { visible: false, notification: null },
  reducers: {
    toggle(state) {
      state.visible = !state.visible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },


});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';


// const initialState = {
//   items: [],
// };

// const basketSlice = createSlice({
//   name: 'basket',
//   initialState,
//   reducers: {
//     addToBasket: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeFromBasket: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload.id);
//     },
//     clearBasket: (state) => {
//       state.items = [];
//     },
//   },
// });


// export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;


// export default basketSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {

        existingItem.quantity += action.payload.quantity || 1;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearBasket: (state) => {
      state.items = [];
    },
    incrementItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {

          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket, incrementItem, decrementItem } = basketSlice.actions;

export default basketSlice.reducer;

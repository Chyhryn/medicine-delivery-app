import { createSlice } from "@reduxjs/toolkit";
const orderInitialState = [];

// export const orderReducer = (state = orderInitialState, action) => {
//   switch (action.type) {
//     case addProductToCart.type: {
//       console.log("payload: ", action.payload);
//       return [...state, action.payload];
//     }
//     case deleteProductFromCart.type: {
//       return state.filter((product) => product.id !== action.payload);
//     }
//     default:
//       return state;
//   }
// };

const orderSlice = createSlice({
  name: "order",
  initialState: orderInitialState,
  reducers: {
    addProductToCart(state, action) {
      const isInOrder = state.find((product) => {
        return product.id === action.payload.id;
      });

      if (isInOrder) {
        state.forEach((product) => {
          if (product.id === action.payload.id) {
            product.quantity += 1;
          }
        });
      } else state.push(action.payload);
    },
    deleteProductFromCart(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
    changeProductQuantity(state, action) {
      state[state.findIndex((product) => product.id === action.payload.id)].quantity = action.payload.quantity;
    },
  },
});

export const { addProductToCart, deleteProductFromCart, changeProductQuantity } =
  orderSlice.actions;
export const orderReducer = orderSlice.reducer;

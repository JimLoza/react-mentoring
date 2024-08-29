import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CartAddState {
    id: string | number;
    name: string;
    url: string;
    info: string;
}

interface CartRemoveState {
    id: string | number;
}

// Define the initial state using that type
const initialState: CartAddState[] = [];

export const carritoSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart : (state, action: PayloadAction<CartAddState>) => {
        if(state.length || state.filter((item) => item.id === action.payload.id).length) state.push(action.payload)
    },
    removeToCart : (state, action: PayloadAction<CartRemoveState>) => {} 
  },

})

export const { addToCart, removeToCart} = carritoSlice.actions


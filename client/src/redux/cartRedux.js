import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			state.products.push(action.payload);
			state.total += action.payload.price;
		},
		RemoveProduct: (state, action) => {
			state.quantity = 0;
			state.total -= action.payload.price;
			state.products = action.payload.products;
		},
	},
});

export const { addProduct, RemoveProduct } = cartSlice.actions;
export default cartSlice.reducer;

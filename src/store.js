import { configureStore } from '@reduxjs/toolikt';
import cartReducer from './Components/CartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;

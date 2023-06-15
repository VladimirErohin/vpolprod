import { configureStore } from '@reduxjs/toolkit';
import currencySlice from "./slices/currency/slice";
import weatherSlice from "./slices/weather/slice";

export const store = configureStore({
    reducer: {
        currency:currencySlice,
        weather:weatherSlice,
    },
});
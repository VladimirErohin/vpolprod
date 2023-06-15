import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    weatherData:null,
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        getWeather: (state, action) => {
            state.weatherData = {...action.payload}
            console.log(action.payload)
    },
    },
});

export const {getWeather} = weatherSlice.actions;

export default weatherSlice.reducer;
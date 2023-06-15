import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currencyData:[],
    testValue: 0
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        getCurrency: (state, action) => {
          state.currencyData = [...action.payload]
           // console.log(action.payload)
        }
        //     setCategoryId: (state, action: PayloadAction<number>) => {
        //         state.categoryId = action.payload
        //     },
        //
        //     setSearchValue: (state, action: PayloadAction<string>) => {
        //         state.searchValue = action.payload
        //     },
        //
        //     setSort: (state, action: PayloadAction<SortType>) => {
        //         state.sort = action.payload
        //     },
        //
        //     setCurrentPage: (state, action: PayloadAction<number>) => {
        //         state.currentPage = action.payload
        //     },
        //     setFilters: (state, action: PayloadAction<FilterSliceStateType>) => {
        //         if (Object.keys(action.payload).length) {
        //             state.currentPage = Number(action.payload.currentPage);
        //             state.categoryId = Number(action.payload.categoryId);
        //             state.sort = action.payload.sort;
        //         } else {
        //             state.currentPage = 1;
        //             state.categoryId = 0;
        //             state.sort = {
        //                 name: 'популярности',
        //                 sortProperty: SortPropertyEnum.RATING_DESK,
        //             };
        //         }
        //         // state.currentPage = Number(action.payload.currentPage);
        //         // state.sort.sortProperty = action.payload.sort.sortProperty;
        //         // state.categoryId = Number(action.payload.categoryId);
        //     },
    },
});

export const {getCurrency} = currencySlice.actions;
//export const {setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue} = currencySlice.actions;

export default currencySlice.reducer;
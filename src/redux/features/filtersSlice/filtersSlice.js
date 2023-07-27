import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  status: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

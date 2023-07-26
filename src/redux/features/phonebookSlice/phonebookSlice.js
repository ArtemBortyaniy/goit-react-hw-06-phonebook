import { createSlice } from '@reduxjs/toolkit';

const phonebookInitState = [{ id: 1, name: 'Artem', number: '0934530665' }];

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: phonebookInitState,
  reducers: {
    addPhone: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
    detelePhone: {
      reducer(state, action) {
        return state.filter(state => state.id !== action.payload);
      },
    },
  },
});

export const { addPhone, detelePhone } = phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

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
        return state.filter(entry => entry.id !== action.payload);
      },
    },
  },
});

const persistConfig = {
  key: 'phonebook',
  storage,
};

export const persistedPhonebookReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);

export const { addPhone, detelePhone } = phonebookSlice.actions;

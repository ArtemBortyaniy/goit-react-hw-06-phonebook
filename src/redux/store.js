import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './features/filtersSlice/filtersSlice';
import { phonebookReducer } from './features/phonebookSlice/phonebookSlice';

export default configureStore({
  reducer: {
    phonebook: phonebookReducer,
    filters: filtersReducer,
  },
});

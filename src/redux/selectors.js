import { useSelector } from 'react-redux';

export const usePhonebookSelector = () => {
  return useSelector(state => state.phonebook);
};

export const useFiltersSelector = () => {
  return useSelector(state => state.filters.status);
};

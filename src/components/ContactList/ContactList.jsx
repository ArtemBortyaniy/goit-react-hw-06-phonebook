import css from './ContactsList.module.css';
import { usePhonebookSelector } from 'redux/selectors';
import { useFiltersSelector } from 'redux/selectors';
import { detelePhone } from 'redux/features/phonebookSlice/phonebookSlice';
import { useDispatch } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const phonebooks = usePhonebookSelector();
  const filter = useFiltersSelector();

  const handleFilter = () => {
    return phonebooks.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  console.log(phonebooks);

  return (
    <div className={css.container}>
      {/* <ul className={css.list}>
        {handleFilter().map(({ id, name, number }) => {
          return (
            <li key={id} className={css.item}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                className={css.buttonDelete}
                onClick={() => dispatch(detelePhone(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

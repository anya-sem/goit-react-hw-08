import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.label}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="search"
        onChange={evt => dispatch(updateFilter(evt.target.value))}
      />
    </div>
  );
}

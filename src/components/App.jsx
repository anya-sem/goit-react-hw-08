import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { useEffect } from 'react';
import { selectError, selectLoading } from '../redux/selectors';
import Loader from './Loader/Loader';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.searchWrap}>
        <SearchBox />
        {loading && !error && <Loader />}
        <ContactList />
      </div>
    </div>
  );
}

export default App;

import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectVisibleContacts } from '../../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);
  // const filter = useSelector(state => state.filters.name.toLowerCase());
  // const filteredContacts = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(filter);
  // });

  const dispatch = useDispatch();

  return (
    <ul className={css.wrapper}>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            name={name}
            number={number}
            id={id}
            onDelete={() => dispatch(deleteContact(id))}
          />
        );
      })}
    </ul>
  );
}

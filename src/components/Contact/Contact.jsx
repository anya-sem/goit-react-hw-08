import { IoIosPerson } from 'react-icons/io';
import { IoIosCall } from 'react-icons/io';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <div className={css.titleWrap}>
        <IoIosPerson className={css.icon} />
        <p className={css.title}>{name}</p>
      </div>
      <div className={css.titleWrap}>
        <IoIosCall className={css.icon} />
        <p className={css.title}>{number}</p>
      </div>
      <button className={css.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}

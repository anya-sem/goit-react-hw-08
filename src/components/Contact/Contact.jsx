import { IoIosPerson } from 'react-icons/io';
import { IoIosCall } from 'react-icons/io';
import css from './Contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { openEditModal } from '../../redux/contacts/editSlice';
import { selectEdit } from '../../redux/contacts/selectors';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const { isOpen, contactId, initialName, initialNumber } = useSelector(selectEdit);

  const openEditModalHandler = () => {
    dispatch(openEditModal({ contactId: id, initialName: name, initialNumber: number }));
  };

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
      <div className={css.buttons}>
        <button className={css.button} onClick={openEditModalHandler}>
          Edit
        </button>
        <button className={css.button} onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </div>
    </div>
  );
}

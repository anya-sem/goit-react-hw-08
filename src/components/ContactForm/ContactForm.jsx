import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';

const initialValues = {
  name: '',
  number: '',
};
const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!'),
  number: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required!'),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <p className={css.label}>Name</p>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <p className={css.label}>Number</p>
        <Field className={css.field} type="tel" name="number" id={numberFieldId} />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

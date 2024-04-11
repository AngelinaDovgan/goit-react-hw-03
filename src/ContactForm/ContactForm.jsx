import { Field, Formik, Form, ErrorMessage } from "formik";
import { object, string, number } from 'yup';
import css from './ContactForm.module.css'

const UserSchema = object({
    name: string().min(3, "Type at least 3 characters!").max(50, "Max number of characters is 50!").required("Is required!"),
    number: number().required("Is required!")
})


export default function ContactForm({ onAdd }) {
    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={UserSchema}
            onSubmit={(values, { resetForm }) => {
                onAdd({
                    id: Date.now(),
                    name: values.name,
                    number: values.number
                });
                resetForm();
            }}>
            <Form className={css.frm}>
                <label>Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="span" className={css.span}/>
                
                <label>Number</label>
                <Field type="number" name="number" />
                <ErrorMessage name="number" component="span" className={css.span}/>
            <button type="submit" className={css.btn}>Add contact</button>
        </Form> 
        </Formik>
        
    );
}
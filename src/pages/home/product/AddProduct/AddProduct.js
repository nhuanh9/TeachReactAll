import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
const VALIDATE_SCHEMA = Yup.object().shape({
    name: Yup.string()
        .required("Bạn phải nhập tên"),
    price: Yup.string()
        .required("Bạn phải nhập giá")
});
export default function AddProduct() {
    return (
        <>
            <Formik initialValues={{
                name:'',
                price: 0,
                category: 0
            }} onSubmit={values => {
                console.log({...values, category: {id: values.category}})
                // axios.post...()
            }} validationSchema={VALIDATE_SCHEMA}
            >
                <Form>
                    <Field name={'name'}></Field>
                    <ErrorMessage name={'name'}></ErrorMessage>
                    <Field name={'price'}></Field>
                    <ErrorMessage name={'price'}></ErrorMessage>
                    <Field name={'idCategory'}></Field>
                    <button>Add</button>
                </Form>
            </Formik>
        </>
    )
}

// Formik => thu vien ho tro lam form => select / option / checkbox / radio
// npm i formik
// npm i yup
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
            <h1>Add Product page</h1>
            <Formik initialValues={{name:'', price: ''}} onSubmit={values => {
                console.log(values)
            }}
            validationSchema={VALIDATE_SCHEMA}>
                <Form>
                    <Field name={'name'}></Field>
                    <ErrorMessage name={'name'}></ErrorMessage>
                    <Field name={'price'}></Field>
                    <ErrorMessage name={'price'}></ErrorMessage>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}
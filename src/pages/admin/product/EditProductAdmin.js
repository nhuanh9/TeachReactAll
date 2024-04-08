import {useNavigate, useParams} from "react-router";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import axios from "axios";

export default function EditProductAdmin() {
    let {id} = useParams();
    let [data, setData] = useState({});
    let navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3001/students/' + id).then(res => {
            setData(res.data)
        })
    }, []);
    return (
        <>
            <h1>Edit Product Admin page {id}</h1>
            <Formik
                initialValues={data}
                onSubmit={values => {
                    axios.put('http://localhost:3001/students/' + id, values).then(res => {
                        navigate('/admin')
                    })
                }}
                enableReinitialize={true}
            >
                <Form>
                    <Field name={'id'}></Field>
                    <Field name={'name'}></Field>
                    <Field name={'description'}></Field>
                    <Field name={'action'}></Field>
                    <Field name={'score'}></Field>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}
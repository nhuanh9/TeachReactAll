import {useParams} from "react-router";

export default function EditProduct() {
    let {idX} = useParams();
    console.log(idX)
    return (
        <>
            <h1>Edit Product page</h1>
        </>
    )
}
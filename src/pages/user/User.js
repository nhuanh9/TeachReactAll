import Navbar from "../../components/Navbar";
import {Outlet} from "react-router";

export default function User() {
    return (
        <>

            <Navbar></Navbar>
            <h1>User page</h1>
            <Outlet></Outlet>
        </>
    )
}
// user/list
// user/add
import Navbar from "../../components/Navbar";
import {Outlet} from "react-router";

export default function Home() {
    return (
        <>

            <Navbar></Navbar>
            <h1>Home page</h1>
        </>
    )
}
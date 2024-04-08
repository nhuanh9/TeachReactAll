import Navbar from "../../components/Navbar";
import {Outlet} from "react-router";
import Logo from "../../components/Logo";
import Banner from "../../components/Banner";
import SideBar from "../../components/SideBar";
import ListProduct from "./product/ListProduct";

export default function Home() {
    return (
        <>
            <div className="row">
                <Logo></Logo>
                <Banner></Banner>
                <Navbar></Navbar>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
        </>
    )
}
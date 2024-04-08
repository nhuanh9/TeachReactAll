import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import AddProduct from "./pages/home/product/AddProduct/AddProduct";
import {Route, Routes, Link} from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import User from "./pages/user/User";
import EditProduct from "./pages/home/product/EditProduct";
import ListProduct from "./pages/home/product/ListProduct";
import Login from "./pages/Login";

function App() {

    return (
        <>
            <div className="container-fluid">
                <Admin></Admin>
            </div>
        </>
    );
}

export default App;
//npm i react-router-dom

//BrowserRouter
//Routes
//Route
//useParams
//useNavigate
//Link

//Outlet
// => Redux ToolKit async thunk
// => X
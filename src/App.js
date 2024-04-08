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
import Register from "./pages/Register";
import ListProductAdmin from "./pages/admin/product/ListProductAdmin";
import ListUserAdmin from "./pages/admin/user/ListUserAdmin";
import ListOrderAdmin from "./pages/admin/order/ListOrderAdmin";
import ListOrder from "./pages/home/order/ListOrder";

function App() {

    return (<>
            <div className="container-fluid">
                <Routes>
                    <Route path={''} element={<Login></Login>}></Route>
                    <Route path={'register'} element={<Register></Register>}></Route>
                    <Route path={'admin'} element={<Admin></Admin>}>
                        <Route path={''} element={<ListProductAdmin></ListProductAdmin>}></Route>
                        <Route path={'user'} element={<ListUserAdmin></ListUserAdmin>}></Route>
                        <Route path={'order'} element={<ListOrderAdmin></ListOrderAdmin>}></Route>
                    </Route>
                    <Route path={'home'} element={<Home></Home>}>
                        <Route path={''} element={<ListProduct></ListProduct>}></Route>
                        <Route path={'order'} element={<ListOrder></ListOrder>}></Route>
                    </Route>
                </Routes>
            </div>
        </>);
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
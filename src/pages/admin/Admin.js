import {Outlet, useNavigate} from "react-router";
import ListProductAdmin from "./product/ListProductAdmin";
import {Link} from "react-router-dom";

export default function Admin() {
    return (
        <>
            <div className="row">
                <div className="col-3" style={{border:'1px solid', height: '100vh'}}>
                    <Link to={''}><h2>List Product</h2></Link>
                    <Link to={'user'}><h2>List User</h2></Link>
                    <Link to={'order'}><h2>List Order</h2></Link>
                    <Link to={'/'}><h2>Log Out</h2></Link>
                </div>
                <div className="col-9" style={{border:'1px solid', height: '100vh'}}>
                    <div className="row">
                        <div className="col-12" style={{border:'1px solid'}}>
                            <h1 className={'text-center'}>Menu Admin</h1>
                        </div>
                        <div className="col-12">
                           <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import {useNavigate} from "react-router";
import ListProductAdmin from "./product/ListProductAdmin";

export default function Admin() {
    return (
        <>
            <div className="row">
                <div className="col-3" style={{border:'1px solid', height: '100vh'}}>
                    <h2>List Product</h2>
                    <h2>List Order</h2>
                    <h2>List User</h2>
                </div>
                <div className="col-9" style={{border:'1px solid', height: '100vh'}}>
                    <div className="row">
                        <div className="col-12" style={{border:'1px solid'}}>
                            <h1 className={'text-center'}>Menu Admin</h1>
                        </div>
                        <div className="col-12">
                            <ListProductAdmin></ListProductAdmin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
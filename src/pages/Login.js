import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

export default function Login() {
    let navigate = useNavigate();
    let login = ()=> {
        let usn = document.getElementById('usn').value;
        let pass = document.getElementById('pass').value;
        if (usn == 'admin' && pass=='admin') {
            navigate('/admin');
        } else {
            navigate('/home')
        }
    }
    return (
        <>
            <div className="row">
                <div className="offset-4"></div>
                <div className="col-4">
                    <h1 className={'text-center'}>Login page</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control"
                               aria-describedby="emailHelp" id="usn"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="pass" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button className="btn btn-primary" onClick={login}>Submit</button>
                    <button type={"button"} className="btn btn-secondary"><Link to={'register'}>Register Page</Link></button>
                </div>
                <div className="offset-4"></div>
            </div>
        </>
    )
}
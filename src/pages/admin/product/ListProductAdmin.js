import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


export default function ListProductAdmin() {
    let [list, setList] = useState([]);
    let [isDelete, setIsDelete] = useState(false);
    let loadList = () => {
        axios.get('http://localhost:3001/students').then(res => {
            setList(res.data)
        })
    }
    useEffect(() => {
        loadList()
    }, [isDelete]);
    return (
        <>
            <h1>List Product Admin page</h1>
            <input onInput={(e) => {
                let key = e.target.value;
                let search = list.filter(item => item.name.toLowerCase().includes(key.toLowerCase()));
                setList(search)
            }}/>
            <button onClick={()=> {
                setIsDelete(!isDelete);
            }}>Clear Filter </button>
            {list.map(item => (
                <h3>{item.name}
                    <Link to={'product/edit/' + item.id}>Edit</Link>
                    <span onClick={() => {
                        axios.delete('http://localhost:3001/students/' + item.id).then(res => {
                            alert('Xóa thành công!!!');
                            setIsDelete(!isDelete);
                        })
                    }}>Delete</span>
                </h3>
            ))}
        </>
    )
}

// Xóa API => API List
// Xóa List => Xóa API
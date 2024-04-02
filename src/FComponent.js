import {useState} from "react";

export default function FComponent (){
    let [y, setY] = useState(1);
    return (
        <>
            <h2>Functionnn Component {y}</h2>
            <button onClick={()=> {
                setY(y++);
            }}>Y++</button>
        </>
    )
}
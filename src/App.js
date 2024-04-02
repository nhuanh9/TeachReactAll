import {useState} from "react";
import CComponent from "./CComponent";
import FComponent from "./FComponent";

function App() {
    let [isShowF, setIsShowF] = useState(true);
    let [isShowC, setIsShowC] = useState(true);
  return (
      <>
          {isShowC && <CComponent></CComponent>}
          <button onClick={() => {
              setIsShowC(!isShowC)
          }}>Hide/Show CC
          </button>
          {isShowF && <FComponent></FComponent>}
          <button onClick={() => {
              setIsShowF(!isShowF)
          }}>Hide/Show FC
          </button>
      </>
  );
}

export default App;

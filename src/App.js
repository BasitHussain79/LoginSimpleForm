import { useState } from "react";
import "./App.css";
import Login from "./LoginForm";

function App() {
  const [hide, setHide] = useState(false);

  const hideHandler = () => {
    setHide(true);
  };

  const backHandler = () => {
    setHide(false);
  }

  return (
    <div className='center'>
      {!hide && <button onClick={hideHandler}>ShowForm</button>}
      {hide && <Login backHandler={backHandler} />}
    </div>
  );
}

export default App;

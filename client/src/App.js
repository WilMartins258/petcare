import './reset.css';
import './App.css';
import Login from './pages/login/Login';
import LoginCerto from './pages/login-certo/Login.js';
import Register from './pages/register/Register';

import { useState } from "react";



function App() {

  const alternar = () => {
    // console.log('chamou o alternar');
    // console.log('component1:: ', component);
    if (component === 0){
      setComponent(1);
    } else if (component === 1) {
      setComponent(0);
    }
    // console.log('component2:: ', component);
  }

  const [component, setComponent] = useState(0);

  const retornaPagina = () => {
    if (component === 0) {
      return <Login/>
    } else {
      return <Register/>
    }
  }

  return (
    <div className="App">
      <LoginCerto></LoginCerto>
    </div>
  );
}

export default App;


/*
return (
    <div className="App">
      {retornaPagina()},
      <div id='div_btn'>
        <button id='btn' onClick={alternar}>
          Alternar
        </button>
      </div>
    </div>
  );


*/

import { useState } from "react";
// import axios from "axios";
import api from "../../services/backend-service";

function Login() {

    /**
     * states do React utilizados para armazenar e setar variáveis em um component
     */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    /**
     * Função executada ao clicar no botão de login
     * @param {evento de click} e 
     */
    // const handleLogin = async (e) => {
    //     e.preventDefault();

    //     console.log('login clicked')
    //     console.log({email})
    //     console.log({password})
    // }

    const handleLogin = async (values) => {
      console.log({values});
      console.log({email: values.email});
      console.log({pw: values.password});
      // await axios.post("http://localhost:3001/login", {
      //   email: 'values.email',
      //   password: 'values.password',
      // }).then((response) => {
      //   alert(response.data.msg);
      // });
      const objTest = {
        email: "teste@teste.com.br",
        password: "teste123"
      }

      const testing = await api.post("http://localhost:3001/login", objTest);

      console.log({testing})
    };
  
    // const handleRegister = (values) => {
    //   Axios.post("http://localhost:3001/register", {
    //     email: values.email,
    //     password: values.password,
    //   }).then((response) => {
    //     alert(response.data.msg);
    //     console.log(response);
    //   });
    // };

    return (
        <div className="div-form">
          <header className="App-header">
            <h2>Login</h2>
            <form 
            className='login-form'
            onSubmit={handleLogin}
            method="post"
            target="http://localhost:3001/">
              <input 
                type='email' 
                name='email' 
                placeholder='Email' 
                required
                onChange={(e) => setEmail(e.target.value)}
                />
              <input 
                type='password' 
                name='password' 
                placeholder='Password' 
                required
                onChange={(e) => setPassword(e.target.value)}
                />
              <button 
                type='submit' 
                className='btn-login'
                onClick={(e) => handleLogin(e)} >Login</button>
            </form>
          </header>
        </div>
    )
};

export default Login;

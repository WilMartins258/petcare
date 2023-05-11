import { useState } from "react";

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
    const handleLogin = async (e) => {
        e.preventDefault();

        console.log('login clicked')
        console.log({email})
        console.log({password})
    }

    return (
        <div className="div-form">
          <header className="App-header">
            <h2>Login</h2>
            <form className='login-form'>
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


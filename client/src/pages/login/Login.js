import '../../reset.css';
import './Login.css';

import { useState } from "react";
import api from "../../services/backend-service";

function Login() {
  const input_email =  document.getElementById('input_email');
  const input_password = document.getElementById('input_password');
  const p_resposta = document.getElementById('resposta');
  const [resposta, setResposta] = useState('');

    const ocultaResposta = () => {
      console.log('ocultaResposta')
      if (p_resposta && p_resposta.style.display !== 'none'){
        p_resposta.style.display = "none";
      }
    }

    const exibeResposta = () => {
      console.log('exibeResposta')
      if (p_resposta && p_resposta.style.display === 'none'){
        p_resposta.style.display = "flex";
      }
    }

    /**
     * Função executada ao clicar no botão de login
     */
    const handleLogin = async (values) => {
      values.preventDefault();

      if (!input_email || input_email.value.length === 0){
        setResposta('Campo email vazio');
      } else if (input_password.value.length === 0){
        setResposta('Campo senha vazio');
      } else {
        const user_login_info = {
          email: input_email.value,
          password: input_password.value
        }

        console.log({user_login_info});

        console.log('antes de chamar o back \n');

        const login = await api.post("/login", user_login_info);
        
        if (login.status === 200){
          setResposta(login.data.msg);
          console.log({login})
        } else {
          setResposta('E-mail ou senha incorretos');
          console.log('E-mail ou senha incorretos');
        }
      }
      exibeResposta();
    };
  
    return (
        <div className="div-form">
          <header className="App-header">
            <h2>Login</h2>
            <form className='login-form'>
              <input 
                type='email' 
                name='input_email' 
                id='input_email' 
                placeholder='Email' 
                onChange={ocultaResposta}
                />
              <input 
                type='password' 
                name='input_password'
                id='input_password' 
                placeholder='Password' 
                onChange={ocultaResposta}
                />
                <p id="resposta" 
                  style={{
                    display: 'none', 
                    marginLeft: '35%', 
                    fontSize: '15px', 
                    color: 'red'
                  }}> 
                  {resposta}
                </p>
              <button 
                className='btn-login'
                onClick={(e) => handleLogin(e)} >Login</button>
            </form>
          </header>
        </div>
    )
};

export default Login;

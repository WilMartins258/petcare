import { useState } from "react";
import { IMaskInput } from "react-imask";
import api from "../../services/backend-service";

import '../../reset.css';
import './Register.css';

function Register() {
  const input_email =  document.getElementById('input_email');
  const input_name = document.getElementById('input_name');
  const input_last_name = document.getElementById('input_last_name');
  const input_phone = document.getElementById('input_phone');
  const input_password = document.getElementById('input_password');
  const input_password_confirm = document.getElementById('input_password_confirm');
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
     * Função executada ao clicar no botão de cadastrar
     */
    const handleRegister = async (values) => {
      console.log('handleRegister')

      if (!input_email || input_email.value.length === 0){
        setResposta('Campo email vazio');
      } else if (input_name.value.length === 0){
        setResposta('Campo nome vazio');
      } else if (input_last_name.value.length === 0){
        setResposta('Campo sobrenome vazio');
      } else if (input_phone.value.length === 0){
        setResposta('Campo celular vazio');
      } else if (input_password.value.length === 0){
        setResposta('Campo senha vazio');
      } else if (input_password_confirm.value.length === 0){
        setResposta('Campo confirmação de senha vazio');
      } else if (input_password_confirm.value !== input_password.value){
        setResposta('As senhas não coincidem');
      } else {
      
        const user_register_info = {
          email: input_email.value,
          name: input_name.value,
          last_name: input_last_name.value,
          phone: input_phone.value,
          password: input_password.value,
        }
        
        console.log({user_register_info});

        const register = await api.post("/register", user_register_info);

        if (register.status === 200){
          console.log('');
          console.log('');

        }

        // console.log({register});
        console.log('\n\n\n\n');
      }
      exibeResposta();
    };
  
    return (
        <div className="div-form">
          <header className="App-header">
            <h2>Cadastrar-se</h2>
            <form className='login-form'>
              <input 
                type='email'
                name='input_email'
                id='input_email'
                placeholder='Email'
                onChange={ocultaResposta}
                required
              />
              <input 
                type='text'
                name='input_name'
                id='input_name'
                placeholder='Nome'
                onChange={ocultaResposta}
                required
              />
              <input 
                type='text'
                name='input_last_name'
                id='input_last_name'
                placeholder='Sobrenome'
                onChange={ocultaResposta}
                required
              />
              <IMaskInput
                id='input_phone'
                mask="(00)00000-0000"
                onChange={ocultaResposta}
                placeholder="Celular"
                required
              />
              <input 
                type='password'
                name='input_password'
                id='input_password'
                onChange={ocultaResposta}
                placeholder='Senha'
                required
              />
              <input 
                type='password'
                name='input_password_confirm'
                id='input_password_confirm'
                onChange={ocultaResposta}
                placeholder='Confirme sua senha'
                required
              />
              <p id="resposta"
                style={{
                  display: 'none',
                  textAlign: 'auto',
                  textAlignLast: 'center',
                  // marginLeft: '35%',
                  fontSize: '15px',
                  color: 'red'
                }}> 
                {resposta}
              </p>
              <button 
                className='btn_register'
                onClick={(e) => handleRegister(e)}>Cadastrar-se</button>
            </form>
          </header>
        </div>
    )
};

export default Register;

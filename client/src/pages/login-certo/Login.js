import './style.css';

function LoginCerto() {
  const modal = document.getElementById('login-form');
  const x = document.getElementById('login');
	const y = document.getElementById('register');
	const z = document.getElementById('btn');

  function exibirLoginRegister(e) {
    console.log('exibirLoginRegister');

    document.getElementById('login-form').style.display='block';
  }
    
		function register() {
      console.log('register...');
      if (x && y && z) {
        x.style.left='-400px';
			  y.style.left='50px';
			  z.style.left='110px';
      }
		}

		function login() {
      console.log('login...');
      if (x && y && z) {
        x.style.left='50px';
        y.style.left='450px';
        z.style.left='0px';
      }
		}

    window.onclick = function(event) {
      console.log('clicando no fundo');
      // console.log({event});

        if (event.target === modal) {
            // console.log('DENTRO DO IF INSANO');

            modal.style.display = "none";
        }
    }
  
  return (
    <div className="full-page">
      <div class="navbar">
        <div>
          <a href='teste.html'>PETCARE</a>
        </div>
        <nav>
          <ul id='MenuItems'>
            <li><a href="#">PAGINA INICIAL</a></li>
            <li><a href='#'>SOBRE NÓS</a></li>
            <li><a href='#'>SERVIÇOS</a></li>
            <li><a href='#'>CONTATO</a></li>
            <li><button className='loginbtn' id='botao-insano' onClick={() => exibirLoginRegister()}>LOGIN/REGISTRE-SE</button></li>
          </ul>
        </nav>
      </div>
      <div id='login-form'class='login-page'>
        <div class="form-box">
          <div class='button-box'>
            <div id='btn'></div>
            <button type='button' onClick={login} className='toggle-btn'>Logar</button>
            <button type='button' onClick={register} className='toggle-btn'>Registrar</button>
          </div>
          <form id='login' class='input-group-login'>
            <input type='text'class='input-field'placeholder='Informe seu Email' required ></input>
            <input type='password'class='input-field'placeholder='Digite sua Senha' required></input>
              <p className='forgot-password-paragraph'>
                <a href='#'>
                Esqueceu a Senha?
                </a>
              </p>
            <button type='submit'class='submit-btn'>Efetuar Login</button>
          </form>
          <form id='register' class='input-group-register'>
              <input type='text'class='input-field'placeholder='Primeiro Nome' required></input>
              <input type='text'class='input-field'placeholder='Ultimo Nome ' required></input>
              <input type='email'class='input-field'placeholder='Email' required></input>
              <input type='password'class='input-field'placeholder='Digite sua Senha' required></input>
              <input type='password'class='input-field'placeholder='Confirme sua Senha'  required></input>
              <p className='terms-conditions-paragraph'>
                Eu aceito os termmos e condições
                {/* Eu aceito os <a href='#'>termos e condições</a> */}
              </p>
              <button type='submit'class='submit-btn'>Registrar</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default LoginCerto;

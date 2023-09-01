import React from "react";
import './Welcome.css'
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Bem-vindo ao College Chat</h2>
      <h3>Interaja com seu professor de forma mais rapida e fácil</h3>
      
      <div className="content-Form">

        <form action="">
          <h3>Faça agora a sua inscrição ou entre:</h3>
         
         
          <div className="information-Form">
          <input type="email" placeholder="Digite seu e-mail" className="input-Email" />
          <input type="password" placeholder="Digite a sua senha"  className="input-Password"/>
          </div>




          <div className="acessConta">

          <button className="entrar">Entrar</button>
          <button className="cadastrar" >Cadastrar-se</button>

          <button className="sign-in"  onClick={googleSignIn}>
            <img src="/googleIcon.png" alt="imagem" />
          </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Welcome;

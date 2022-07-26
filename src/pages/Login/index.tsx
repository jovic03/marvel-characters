import React, { useState } from "react"

interface userLoginObj{
  email:string;
  senha:string;
}

const Login = (props: any) => {
  const [values,setValues] = useState({
    email:'',
    senha:'',
  })

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) =>{
    //quando receber um evento eu preciso identificar o nome do input que disparou e o seu valor
    //e ataualizar o estado desse item no objeto do estado

    const nomeElemento = event.target.name //evento: email
    const valorDigitado = event.target.value //valor: joao@gmail.com

    //faço uma copia do objeto no estadoi (values) e adiciono as proprieade digitadas pelo usuario
    //apos isso retono para a funcao que vai atualizar esse valor no estado da aplicacao
    setValues((values: userLoginObj)=>({
      ...values,
      [event.target.name]:event.target.value
    }))

  }

  const loginUser = (event:React.SyntheticEvent)=>{
    event.preventDefault();
  }

  return (
    <section className="login-container">
      <div className="login-card">
        <h2>Entrar</h2>
        <form onSubmit={loginUser} className="form-login">
          <input type='email' name="email" id="email" placeholder="Digite seu email" />
          <input type='password' name="password" id="password" placeholder="Digite sua senha"/>
          <button>Entrar</button>
        </form>

      <p>Não tem conta ? Cadastre-se</p>
      </div>
    </section>
  )
}

export default Login
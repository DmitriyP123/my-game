import React from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'

function Login(props) {

  let history = useHistory()
  const dispatch = useDispatch()

  const LoginHandler = async (e) => {
    e.preventDefault()

    const { action, method, name, password} = e.target
    let response = await fetch(action, {
      method,
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    })

    let result = await response.json()
    if (result.succes === true ) {
      dispatch({ type:'LOGIN_USER', payload:result.user})
      window.localStorage.setItem('token',result.token)
      history.push('/')
    }
  }
  return (
    <>
      <form onSubmit={LoginHandler} action = "/users/login" method = "POST">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Введите ваш ник
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Введите ваш ник"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Введите Пароль
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Введите пароль"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </form>
    </>
  );
}

export default Login;

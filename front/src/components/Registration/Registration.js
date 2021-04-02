import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Registration() {
  let [originalFlag, setOriginalFlag] = useState(true)
  const dispatch = useDispatch()
  const history = useHistory()

  const RegistrationHandler = async (e) => {
    e.preventDefault();
    setOriginalFlag(true);
    let { method, action, name, email, password } = e.target;

    let response = await fetch(action, {
      method,
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });
    let result = await response.json();
    console.log(result);
    if (result.succes === false) {
      setOriginalFlag(false);
    } else {
      dispatch({ type:'LOGIN_USER', payload:result.user})
      window.localStorage.setItem('token',result.token)
      history.push("/")
    }
  };

  return (
    <>
      <h3 style={{ marginTop: "30px", marginBottom: "30px" }}>
        Доброе пожаловать! Пожалуйста, зарегистрируйтесь...
      </h3>
      <form onSubmit={RegistrationHandler} method="POST" action="/users">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Придумайте крутой ник
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="например: clown"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Введите вашу красивую почту
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="например: clown@clown.ru"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Придумайте крутой пароль
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="не используйте: 123, qqq и т.п !"
            name="password"
          />
        </div>
        {!originalFlag && (
          <div>
            <span style={{ color: "red", marginBottom: "25px" }}>
              Пользователь с таким именем/почтой уже существует!!!
            </span>
          </div>
        )}
        <button type="submit" className="btn btn-warning">
          Войти
        </button>
      </form>
    </>
  );
}

export default Registration;

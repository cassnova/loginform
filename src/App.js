import './App.css';
import React from 'react';
import { useState } from 'react';

const fakeUser = {
  username: "faker",
  password: "example123"
};

function App() {
  return (
    <div className="App centered column">
      <LoginCard />
    </div>
  );
}

function LoginCard() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [logoutError, setLogoutError] = useState(false);

  const handleInput = (e) => {
    setUsernameInput(e.target.value);
  };

  const handleInputPass = (e) => {
    setPassInput(e.target.value)
  };

  const login = (e) => {
    setIsLoading(true)
    setTimeout(() => {
      if (usernameInput === fakeUser.username || passInput === fakeUser.password) {
        setLoginError(true);
        setLoginSuccess(false);
      } else {
        setLoginSuccess(true);
        setLoginError(false);
      }
      setIsLoading(false);
    }, 2000);

  };

  const logout = () => {
    let random = Math.floor(Math.random() * 10)
    random > 1 ? setTimeout(() => {
      setUsernameInput("")
      setPassInput("")
      setIsLoading(false)
      setLoginSuccess(false)
      setLoginError(null)
    }, 3000) : setLogoutError(true)

  };

  return (
    <div className="flex-container centered">
      <div className="card ">
        <form className="form">
          <div className="inputContainer">
            <input
              autoComplete="off"
              onChange={handleInput}
              className={loginError ? "error-input" : ""}
              placeholder="username"
              name="username"
              type="text"
              value={usernameInput}
            />
          </div>

          <div className="inputContainer">
            <input
              placeholder="password"
              className={loginError ? "error-input" : ""}
              name="password"
              type="password"
              onChange={handleInputPass}
              value={passInput}
            />
          </div>
          {!loginSuccess ? (
            <button type='button' className="btn" onClick={login}>
              {isLoading ? "Cargando..." : "Login"}
            </button>
          ) : (
            <button type='button' className="btn" onClick={logout}>
              Cerrar sesión
            </button>
          )}
          {loginError && (
            <span className="error-message">
              Alguno de los datos ingresados es incorrecto.
            </span>
          )}
          {loginSuccess && (
            <span className="success-message">Login Exitoso!</span>
          )}
          {logoutError && (
            <span className="error-message">
              No se pudo cerrar sesión.
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;

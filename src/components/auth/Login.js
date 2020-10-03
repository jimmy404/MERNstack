import React from 'react';

const Login = () => {

  const onChange = () => {}

  return(
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesion</h1>
        <form>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu E-mail"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block"></input>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;

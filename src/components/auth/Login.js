import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';

const Login = () => {

  //extraer valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { iniciarSesion, mensaje, autenticado } = authContext;

  //state para iniciar sesion
  const [ usuario, guardarUsuario ] = useState({
    email: '',
    password: ''
  });

  //extraer de usuario
  const { email, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  //cuando el usuario quiere iniciar sesion
  const onSubmit = e => {
    e.preventDefault();

    //validar que no haya campos vacios
    if(email.trim() === '' || password.trim() === '' ){
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error')
    }
    //pasarlo al action
    iniciarSesion({email, password});
  }

  return(
    <div className="form-usuario">
        {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>): null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesion</h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
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
              value={password}
              placeholder="Tu Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesion"
            />
          </div>

        </form>
        <Link to={'/nueva-cuenta'} className="enlace-cuenta">Obtener Cuenta</Link>
      </div>
    </div>
  );
};

export default Login;

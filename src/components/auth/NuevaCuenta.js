import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

  //state para iniciar sesion
  const [ usuario, guardarUsuario ] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  });

  //extraer de usuario
  const { nombre, email, password, confirmar } = usuario;

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

    //pasarlo al action

  }

  return(
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crea una cuenta</h1>
        <form
          onSubmit={onSubmit}
        >
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={email}
              placeholder="Tu Nombre"
              onChange={onChange}
            />
          </div>

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
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              value={password}
              placeholder="Repite tu Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="registrar"/>
          </div>

        </form>
        <Link to={'/nueva-cuenta'} className="enlace-cuenta">Obtener Cuenta</Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;

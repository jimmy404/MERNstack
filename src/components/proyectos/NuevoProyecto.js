import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import { AGREGAR_PROYECTO } from '../../types';

const NuevoProyecto = () => {


  //obtener state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario,
          errorformulario,
          mostrarFormulario,
          agregarProyecto,
          mostrarError } = proyectosContext;


  //state para proyecto
  const [ proyecto, guardarProyecto ] = useState({
    nombre: ''
  });

  //extraer nombre del proyecto
  const { nombre } = proyecto;


  //lee contenidos del input
  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name] : e.target.value
    })
  }

  //cuando el usuario envia un proycto
  const onSubmitProyecto = e => {
    e.preventDefault();

    //validar el proyecto
    if(nombre === '') {
      mostrarError();
      return;
    }
    //agregar al state
    agregarProyecto(proyecto);

    //reiniciar el form
    guardarProyecto({
      nombre: ''
    })


  }


  //mostrar el form
  const onClickFormulario = () => {mostrarFormulario()};

  return(
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >Nuevo Proyecto</button>

    {
      formulario
      ? (
        <form
        className="formulario-nuevo-proyecto"
        onSubmit={onSubmitProyecto}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChangeProyecto}
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
        />
      </form>
      ) : null }
  {errorformulario ? <p className="mensaje error">El nombre es obligatorio</p> : null}
    </Fragment>


  );
}

export default NuevoProyecto;
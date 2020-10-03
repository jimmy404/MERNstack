import React, { useReducer } from 'react';
import uuid from 'react-uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO } from '../../types';




const ProyectoState = props => {

  const proyectos = [
    { id: 1, nombre: 'Tienda virtual' },
    { id: 2, nombre: 'Intranet' },
    { id: 3, nombre: 'Redux' }
  ];

  const initialState = {
    proyectos: [],
    formulario: false
  }

  //dispatch para ejecutar las acciones
  const [ state, dispatch ] = useReducer(proyectoReducer, initialState);

  //funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

  //obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos
    })
  }

  //Agregar nuevo proyecto
  const agregarProyecto = proyecto => {
    proyecto.id = uuid();

    //inserta proyecto en el state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto
    })
  }



  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState;

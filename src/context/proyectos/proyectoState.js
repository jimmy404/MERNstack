import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO } from '../../types';

import clienteAxios from '../../config/axios';




const ProyectoState = props => {

  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyecto: null
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
  const obtenerProyectos = async () => {
    try {
      const resultado = await clienteAxios.get('/api/proyectos');
      dispatch({
        type: OBTENER_PROYECTOS,
        payload: resultado.data.proyectos
      })
    } catch (error) {
      console.log(error);
    }
  }

  //Agregar nuevo proyecto
  const agregarProyecto = async proyecto => {

  try {
    const resultado = await clienteAxios.post('/api/proyectos', proyecto);
    console.log(resultado);
    //inserta proyecto en el state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: resultado.data
    })
  } catch (error) {
    console.log(error);
  }

  }

  //valida el formulario por error
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO
    })
  }

  //selecciona el proyecto que el usuario dio click
  const proyectoActual = proyectoId => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId
    })
  }

  //elimina proyecto
  const eliminarProyecto = proyectoId => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId
    })
  }


  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyecto: state.proyecto,
        mostrarError,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        proyectoActual,
        eliminarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState;

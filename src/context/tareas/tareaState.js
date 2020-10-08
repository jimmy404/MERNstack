import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA } from '../../types';

import clienteAxios from '../../config/axios';

const TareaState = props => {
  const initialState = {
    tareasproyecto: [],
    errortarea: false,
    tareaseleccionada: null
  }
  //crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //crear funciones

  //obtener tareas de un proyecto
  const obtenerTareas = async proyecto => {
    try {
      const resultado =  await clienteAxios.get('/api/tareas', {params: { proyecto}});
      dispatch({
        type: TAREAS_PROYECTO,
        payload: resultado.data.tareas
      })
    } catch (error) {
      console.log(error);
    }
  }

  //agregar tarea al proyecto seleccionado
  const agregarTarea = async tarea => {
    console.log(tarea);
    try {
      const resultado = await clienteAxios.post('/api/tareas', tarea);
      console.log(resultado);
      dispatch({
          type: AGREGAR_TAREA,
          payload: tarea
      })
    } catch (error) {
        console.log(error);
    }
}

  //valida y muestra error en caso de ser necesario
  const validarTarea = () => {
    dispatch({
      type:   VALIDAR_TAREA,
    })
  }

  //eliminar por id
  const eliminarTarea = async (id, proyecto) => {
    try {
      await clienteAxios.delete(`/api/tareas/${id}`, {params: { proyecto }});
      dispatch({
        type: ELIMINAR_TAREA,
        payload: id
      })
    } catch (error) {
      console.log(error)
    }
  }

  //cambia el estado de cada tarea
  const cambiaEstadoTarea = tarea => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea
    })
  }

    //extrae tarea para edicion
    const guardarTareaActual = tarea => {
      dispatch({
        type: TAREA_ACTUAL,
        payload: tarea
      })
    }

    //edita modifica una tarea
    const actualizarTarea = tarea => {
      dispatch({
        type: ACTUALIZAR_TAREA,
        payload: tarea
      })
    }

    //elimina tarea seleccionada
    const limpiarTarea = () => {
      dispatch({
        type: LIMPIAR_TAREA,
      })
    }


  return(
    <TareaContext.Provider
      value={{
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiaEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  )
}

export default TareaState;
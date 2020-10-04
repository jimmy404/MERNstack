import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { TAREAS_PROYECTO } from '../../types'

const TareaState = props => {
  const initialState = {
    tareas: [
      { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
      { nombre: 'Elegir colores', estado: true, proyectoId: 2  },
      { nombre: 'Elegir pagos', estado: false, proyectoId: 3  },
      { nombre: 'Elegir antivirus', estado: true, proyectoId: 4  },
      { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
      { nombre: 'Elegir colores', estado: true, proyectoId: 2  },
      { nombre: 'Elegir pagos', estado: false, proyectoId: 3  },
      { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
      { nombre: 'Elegir colores', estado: true, proyectoId: 2  },
      { nombre: 'Elegir pagos', estado: false, proyectoId: 3  },
    ],
    tareasproyecto: null
  }
  //crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //crear funciones

  //obtener tareas de un proyecto
  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId
    })
  }

  return(
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        obtenerTareas,
        tareasproyecto: state.tareasproyecto
      }}
    >
      {props.children}
    </TareaContext.Provider>
  )
}

export default TareaState;
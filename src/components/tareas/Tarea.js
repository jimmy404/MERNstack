import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {

      //extraer si un proyecto esta activo
      const proyectosContext = useContext(proyectoContext);
      const { proyecto } = proyectosContext;

      //funcion para obtener el context de tarea
      const tareasContext = useContext(tareaContext);
      const { eliminarTarea, obtenerTareas, cambiaEstadoTarea } = tareasContext;

      //extraer el proyecto
      const [proyectoActual] = proyecto;

      //funcion que se ejecuta cuando el usuario presiona el boton eliminar
      const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
      }

      //funcion que modifica estado tareas
      const cambiaEstado = tarea => {
        if(tarea.estado) {
          tarea.estado = false
        } else {
          tarea.estado = true
        }
        cambiaEstadoTarea(tarea);
      }

  return(
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado
        ? (
            <button
              type="button"
              className="completo"
              onClick={() => cambiaEstado(tarea)}
            >Completo</button>
          )
        : (
          <button
            type="button"
            className="incompleto"
            onClick={() => cambiaEstado(tarea)}
            >Incompleto</button>
          )
        }
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
        >Editar</button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >Eliminar</button>
      </div>
    </li>
  );
}

export default Tarea;
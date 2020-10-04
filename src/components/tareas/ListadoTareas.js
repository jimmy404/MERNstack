import React, { Fragment, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import Tarea from './Tarea';

const ListadoTareas = () => {

    //obtener state de proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    //array destructuring para extraer proyecto actual
    const [proyectoActual] = proyecto;

  const tareasProyecto = [];

  //elimina un proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id)
  }

  return(
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0
          ? (<li className="tarea"><p>No hay tareas</p></li>)
          : tareasProyecto.map(tarea => (
            <Tarea
              tarea={tarea}
            />
          ))
        }
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >Eliminar</button>
    </Fragment>
  );
}

export default ListadoTareas;
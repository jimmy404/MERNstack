import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext';


const FormTarea = () => {

    //extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //funcion para obtener el context de tarea
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada,
            errortarea,
            agregarTarea,
            validarTarea,
            obtenerTareas,
            actualizarTarea,
            limpiarTarea } = tareasContext;

    //effect que detecta si hay alguna tarea seleccionada
    useEffect(() => {
      if (tareaseleccionada !== null) {
        guardarTarea(tareaseleccionada)
      } else {
        guardarTarea({
          nombre: ''
        })
      }
    }, [tareaseleccionada])

    //state del form
    const [ tarea, guardarTarea ] = useState({
      nombre: ''
    });

    //extraer nombre proyecto
    const { nombre } = tarea;

    //si no hay proyecto seleccionado
    if(!proyecto) return null;

    //array destructuring para extraer proyecto actual
    const [proyectoActual] = proyecto;

    //leer valores form
    const handleChange = e => {
      guardarTarea({
        ...tarea,
        [e.target.name] : e.target.value
      })
    }

    const onSubmit = e => {
      e.preventDefault();

      //validar
      if(nombre.trim() === '') {
        validarTarea();
        return;
      }

      //edicion o nueva tarea
      if(tareaseleccionada === null) {
      //agregar nueva tarea al state de tareas
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
      } else {
        //actualiza tarea existente
        actualizarTarea(tarea);
        //elimina tarea seleccionada del state
        limpiarTarea();
      }

      //obtener y filtrar tareas del proyecto
      obtenerTareas(proyectoActual.id);

      //reiniciar el form
      guardarTarea({
        nombre: ''
      })
    }

    return(
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
        <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? 'Editar Tarea ': 'Agregar Tarea'}
          />
        </div>
      </form>
      {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p>: null}
    </div>
  );
}

export default FormTarea;
import React, { useContext } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext'

const ListadoProyectos = () => {

  const proyectosContext = useContext(proyectoContext);
  const { proyectos } = proyectosContext;


  return(
    <ul className="listado-proyectos">
      {proyectos.map(proyecto => (
        <Proyecto
          proyecto={proyecto}
        />
  ))}
    </ul>
  );
}

export default ListadoProyectos;

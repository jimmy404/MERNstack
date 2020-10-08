import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext'
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListadoProyectos = () => {

  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  useEffect(() => {
    obtenerProyectos();
    //eslint-disable-next-line
  }, []);

  if(proyectos.length === 0) return <p>No hay proyectos, crea uno</p>;


  return(
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map(proyecto => (
          <CSSTransition
            key={proyecto._id}
            timeout={200}
            classNames="proyecto"
          >
            <Proyecto
              proyecto={proyecto}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
}

export default ListadoProyectos;

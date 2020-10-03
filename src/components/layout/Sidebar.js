import React from 'react';
import { Switch } from 'react-router-dom';

const Sidebar = () => {
  return(
    <aside>
      <h1>MERN<span>Tasks</span></h1>
      <div className="proyectos">
        <h2>Tus Proyectos</h2>
      </div>
    </aside>
  );
}

export default Sidebar;
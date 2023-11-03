// Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menú</h2>
      <Link to="/dashboard" className="sidebar-link">Inicio</Link>
      <Link to="/agregar-usuario" className="sidebar-link">Agregar Usuario</Link>
      <Link to="/mostrar-usuario" className="sidebar-link">Mostrar Usuario</Link>
      <Link to="/estadisticas" className="sidebar-link">Estadisticas</Link>
      
      <div className="logout-container">
        <Link to="/" className="sidebar-link logout-link">Logout</Link>
      </div>
    </div>
  );
};

export default Sidebar;

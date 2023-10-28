import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/dashboard.css';
import Sidebar from './Sidebar.jsx';

const MostrarUsuario = () => {
  return (
    <div>
      <h2>¡Bienvenido al Dashboard!</h2>
      <Sidebar />
    </div>
  );
};

export default MostrarUsuario;
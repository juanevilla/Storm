import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AgregarUsuario from './components/AgregarUsuario';

const App = () => {
const rutaActual = window.location.pathname;
console.log(rutaActual); // Esto imprimirá la ruta actual en la consola del navegador

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
          <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/agregar-usuario" element={<AgregarUsuario />} />
            <Route path="/mostrar-usuario" element={<MostrarUsuario />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar.jsx';
import '../styles/MostrarUsuario.css';

const MostrarUsuario = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/get_users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data.resultado);
        } else {
          console.error('Error al obtener usuarios');
        }
      } catch (error) {
        console.error('Error al enviar la solicitud:', error);
      }
    };

    fetchData();
  }, []); // El segundo argumento [] indica que useEffect se ejecutará solo una vez, equivalente a componentDidMount en las clases de componentes.

  return (
    <div className="mostrar-usuario-container">
      <h2>¡Bienvenido!</h2>
      <Sidebar />
      <div>
        <h3>Usuarios:</h3>
        <table className="user-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Celular</th>
              <th>Dirección</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.idusuario}>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.correo}</td>
                <td>{user.celular}</td>
                <td>{user.direccion}</td>
                <td>{user.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MostrarUsuario;

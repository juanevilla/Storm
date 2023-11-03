import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar.jsx';

const Estadisticas = () => {
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        const fetchUserCount = async () => {
            try {
                const response = await fetch('http://localhost:8000/count_users');
                if (response.ok) {
                    const data = await response.json();
                    setUserCount(data.count);
                } else {
                    console.error('Error al obtener el número de usuarios');
                }
            } catch (error) {
                console.error('Error al enviar la solicitud:', error);
            }
        };

        fetchUserCount();
    }, []); // Se ejecuta solo una vez al cargar el componente

    return (
        <div>
            <h2>¡Bienvenido a las estadísticas!</h2>
            <p>Número de usuarios: {userCount}</p>
            <Sidebar />
        </div>
    );
};

export default Estadisticas;

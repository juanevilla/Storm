import React, { useState } from 'react';
import '../styles/agregarUsuario.css';
import Sidebar from './Sidebar.jsx';

const AgregarUsuario = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [userData, setUserData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        celular: '',
        direccion: '',
        contraseña: '',
        estado: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/create_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Respuesta del servidor:', data);
                setUserData({  // Resetear los valores de los inputs
                    nombre: '',
                    apellido: '',
                    correo: '',
                    celular: '',
                    direccion: '',
                    contraseña: '',
                    estado: '',
                });
                setSuccessMessage('Usuario Agregado Exitosamente!');
                setErrorMessage(''); // Limpiar el mensaje de error si hubo uno previamente
            } else {
                const errorData = await response.json();
                console.error('Error al crear usuario:', errorData.message);
                setErrorMessage('Error al crear usuario. Por favor, inténtalo de nuevo.');
                setSuccessMessage(''); // Limpiar el mensaje de éxito si hay un error
            }
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            setErrorMessage('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
            setSuccessMessage(''); // Limpiar el mensaje de éxito en caso de error de red u otros problemas
        }
    };

    return (
        <div>
            <Sidebar />
            <div className="agregar-usuario-container">

                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <input className="input-field" type="text" placeholder="Nombre" value={userData.nombre} onChange={handleInputChange} name="nombre" required />
                    <input className="input-field" type="text" placeholder="Apellido" value={userData.apellido} onChange={handleInputChange} name="apellido" required />
                    <input className="input-field" type="email" placeholder="Correo electrónico" value={userData.correo} onChange={handleInputChange} name="correo" required />
                    <input className="input-field" type="tel" placeholder="Número de celular" value={userData.celular} onChange={handleInputChange} name="celular" required />
                    <input className="input-field" type="text" placeholder="Dirección" value={userData.direccion} onChange={handleInputChange} name="direccion" required />
                    <input className="input-field" type="password" placeholder="Contraseña" value={userData.contraseña} onChange={handleInputChange} name="contraseña" required />
                    <input className="input-field" type="text" placeholder="Estado" value={userData.estado} onChange={handleInputChange} name="estado" required />
                    <button className="submit-button" type="submit">Agregar Usuario</button>
                </form>
            </div>
        </div>
    );
};

export default AgregarUsuario;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate desde react-router-dom
import '../styles/LoginForm.css';

const LoginForm = () => {
  const navigate = useNavigate(); // Obtener la función de navegación del enrutador
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
      });

      if (response.ok) {
        const userData = await response.json();
        console.log('Inicio de sesión exitoso:', userData);
        setSuccessMessage('Inicio de sesión exitoso. ¡Bienvenido!');
        navigate('/dashboard'); // Redirigir al usuario al dashboard
        // Realizar acciones adicionales según la respuesta del backend
      } else {
        console.error('Credenciales incorrectas');
        setErrorMessage('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        setSuccessMessage(''); // Limpiar el mensaje de éxito si hay un error
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setErrorMessage('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      setSuccessMessage(''); // Limpiar el mensaje de éxito en caso de error de red u otros problemas
    }
  };

  return (
    <div className="login-form-container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Contraseña:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;

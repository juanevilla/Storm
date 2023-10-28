async function fetchData() {
      await fetch('http://localhost:8000/create_user', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "data": "demo"
        })
      }).then(response => {
        if (response.ok) {
          const data = response.json();
          console.log('Datos recibidos:', data);
          // Puedes hacer algo con los datos aquí
        } else {
          // Manejo de errores para respuestas no exitosas
          console.error('Error al obtener los datos:', response.status, response.statusText);
        }
      }).catch(error => {
        console.error('Error de red:', error);

      })
  }
  
  // Llamando a la función para iniciar la solicitud
  fetchData();
  
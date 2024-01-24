import React, { useState } from 'react';

const Contacto = () => {
  // Estados para manejar el formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Estado para almacenar y mostrar los datos enviados
  const [datosEnviados, setDatosEnviados] = useState(null);

  // Manejar cambios en los campos del formulario
  const handleNombreChange = (event) => setNombre(event.target.value);
  const handleCorreoChange = (event) => setCorreo(event.target.value);
  const handleMensajeChange = (event) => setMensaje(event.target.value);

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Guardar los datos enviados en el estado
    const nuevosDatosEnviados = {
      nombre,
      correo,
      mensaje,
    };

    setDatosEnviados(nuevosDatosEnviados);
  };

  return (
    <div>
      <h2>Contacto</h2>

      {/* Formulario de contacto */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
          />
        </div>

        <div>
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={handleCorreoChange}
          />
        </div>

        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={handleMensajeChange}
          />
        </div>

        <button type="submit">Enviar</button>
      </form>

      {/* Mostrar datos enviados si existen */}
      {datosEnviados && (
        <div>
          <h3>Datos enviados:</h3>
          <p>Nombre: {datosEnviados.nombre}</p>
          <p>Correo: {datosEnviados.correo}</p>
          <p>Mensaje: {datosEnviados.mensaje}</p>
        </div>
      )}

      {/* Redes sociales */}
      <div>
        <h3>Síguenos en redes sociales:</h3>
        <ul>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="url-del-icono-twitter" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="url-del-icono-facebook" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="url-del-icono-instagram" alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacto;




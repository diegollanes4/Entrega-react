import React, { useEffect, useState } from 'react';

const Jugadores = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    const fetchJugadores = async () => {
      try {
        // Simulación de llamada a la API utilizando JSONPlaceholder
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        // Mapear los datos para obtener solo la información necesaria
        const jugadoresData = data.slice(0, 22).map((jugador) => ({
          id: jugador.id,
          nombre: jugador.name,
          partidosJugados: Math.floor(Math.random() * 100), // Simulación de datos aleatorios
          goles: Math.floor(Math.random() * 50),
          asistencias: Math.floor(Math.random() * 30),
        }));

        setJugadores(jugadoresData);
      } catch (error) {
        console.error('Error al obtener datos de jugadores:', error);
      }
    };

    fetchJugadores();
  }, []);

  return (
    <div>
      <h2>Jugadores</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Partidos Jugados</th>
            <th>Goles</th>
            <th>Asistencias</th>
          </tr>
        </thead>
        <tbody>
          {jugadores.map((jugador) => (
            <tr key={jugador.id}>
              <td>{jugador.id}</td>
              <td>{jugador.nombre}</td>
              <td>{jugador.partidosJugados}</td>
              <td>{jugador.goles}</td>
              <td>{jugador.asistencias}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Jugadores;






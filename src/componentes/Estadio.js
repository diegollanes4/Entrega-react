import React, { useEffect, useState } from 'react';
import estadioImage from '../estadiotfc.jpg'; // Importa la imagen directamente

const Estadio = () => {
  const [historiaEstadio, setHistoriaEstadio] = useState('');

  useEffect(() => {
    // Simular llamada a la API para obtener la historia ficticia del estadio
    const historiaFicticia = `
      Nuestro estadio, conocido como Estadio TFC, es un lugar lleno de historia y emoción. 
      Fue construido en 1990 y ha sido testigo de innumerables momentos memorables a lo largo de los años.

      Con una capacidad para más de 50,000 espectadores, el Estadio TFC se ha convertido en un símbolo de la pasión por el fútbol en nuestra comunidad. 
      La arquitectura única y las instalaciones de última generación hacen que cada visita sea una experiencia inolvidable.

      Desde partidos de campeonato hasta conciertos épicos, nuestro estadio ha acogido eventos que han dejado una marca imborrable en la memoria de los aficionados. 
      La energía vibrante de la multitud y el campo bien cuidado crean la combinación perfecta para celebrar la grandeza del deporte.

      ¡Únete a nosotros en el Estadio TFC y sé parte de la historia en cada momento emocionante!
    `;

    setHistoriaEstadio(historiaFicticia);
  }, []);

  return (
    <div>
      <h2>Estadio TFC</h2>
      <img src={estadioImage} alt="Estadio TFC" style={{ maxWidth: '100%' }} />
      <p>{historiaEstadio}</p>
    </div>
  );
};

export default Estadio;







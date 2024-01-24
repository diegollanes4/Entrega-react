import React, { useEffect, useState } from 'react';

const Historia = () => {
  const [historia, setHistoria] = useState('');

  useEffect(() => {
    const historiaFicticia = `
      En el año 1980, nuestro querido equipo de fútbol fue fundado por un grupo apasionado de fanáticos.
      Durante la década de los 80, el equipo experimentó altibajos, pero lograron ganar su primer campeonato nacional en 1985.

      La década de los 90 fue una época dorada para el equipo. Bajo la dirección de un nuevo entrenador legendario,
      ganaron tres campeonatos consecutivos y dejaron una marca imborrable en la historia del fútbol.

      El nuevo milenio trajo consigo desafíos, pero nuestro equipo nunca perdió la pasión. En 2007, lograron llegar
      a la final de la Liga de Campeones y ganaron el título en una emocionante tanda de penaltis.

      En los últimos años, el equipo ha estado invirtiendo en la cantera y ha surgido una nueva generación de talentos.
      En 2019, ganaron su quinto campeonato nacional y el futuro parece brillante.

      La historia de nuestro equipo es una mezcla de triunfos, desafíos, momentos inolvidables y el apoyo inquebrantable de los aficionados.
      ¡Aquí estamos, listos para enfrentar cualquier desafío que el futuro nos depare!
    `;

    setHistoria(historiaFicticia);
  }, []);

  return (
    <div>
      <h2>Historia</h2>
      <p>{historia}</p>
    </div>
  );
};

export default Historia;


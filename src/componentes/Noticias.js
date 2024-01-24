import React, { useState } from 'react';

// Nuevo componente con Props y State
const NoticiaDetalle = ({ titulo, contenidoInicial }) => {
  const [contenido, setContenido] = useState(contenidoInicial);
  const [verMas, setVerMas] = useState(false);

  const toggleContenido = () => {
    setVerMas(!verMas);
    if (verMas) {
      setContenido(contenidoInicial);
    }
  };

  return (
    <div>
      <h3>{titulo}</h3>
      <p>{verMas ? contenido : `${contenido.slice(0, verMas ? contenido.length : 150)}...`}</p>
      <button onClick={toggleContenido}>
        {verMas ? 'Ver Menos' : 'Ver Más'}
      </button>
    </div>
  );
};

// Nuevo componente Destacado con Props y State
const Destacado = () => {
  const [destacado, setDestacado] = useState({
    titulo: '¡Nuevo logro para Taddey FC!',
    descripcion: 'El equipo Taddey FC ha sido galardonado con el premio al Mejor Equipo del Año. Un reconocimiento merecido por su desempeño excepcional en la temporada pasada.',
  });

  return (
    <div>
      <h2>Destacado</h2>
      <h3>{destacado.titulo}</h3>
      <p>{destacado.descripcion}</p>
    </div>
  );
};

// Nuevo componente SeccionNoticias con Props y State
const SeccionNoticias = ({ categoria, noticias }) => {
  return (
    <div>
      <h2>{categoria}</h2>
      {noticias.map((noticia) => (
        <NoticiaDetalle
          key={noticia.id}
          titulo={noticia.titulo}
          contenidoInicial={noticia.contenido}
        />
      ))}
    </div>
  );
};

// Componente principal
const Noticias = () => {
  const [fichajes, setFichajes] = useState([
    {
      id: 1,
      titulo: 'Nuevo fichaje para Taddey FC',
      contenido: 'El equipo Taddey FC anuncia la incorporación de un nuevo jugador estrella. El fichaje ha generado gran expectación entre los fanáticos, y se espera que fortalezca aún más el equipo para la próxima temporada.',
    },
    // Agrega más noticias de fichajes según sea necesario
  ]);

  const [resultados, setResultados] = useState([
    {
      id: 1,
      titulo: 'Resultados del último partido',
      contenido: 'Taddey FC ganó el último partido con un marcador de 3-1 contra su rival. Fue un emocionante enfrentamiento que mantuvo a los fanáticos al borde de sus asientos. Los jugadores demostraron su habilidad y dedicación en cada minuto del juego. ¡Una victoria para recordar!',
    },
    // Agrega más noticias de resultados según sea necesario
  ]);

  return (
    <div>
      {/* Sección Últimos Fichajes */}
      <SeccionNoticias categoria="Últimos Fichajes" noticias={fichajes} />

      {/* Sección Resultados Recientes */}
      <SeccionNoticias categoria="Resultados Recientes" noticias={resultados} />

      {/* Sección Destacado */}
      <Destacado />
    </div>
  );
};

export default Noticias;





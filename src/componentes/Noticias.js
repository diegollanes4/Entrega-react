import React, { useState } from 'react';


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


const Noticias = () => {
  const [fichajes, setFichajes] = useState([
    {
      id: 1,
      titulo: 'Nuevo fichaje para Taddey FC',
      contenido: 'El equipo Taddey FC anuncia la incorporación de un nuevo jugador estrella. El fichaje ha generado gran expectación entre los fanáticos, y se espera que fortalezca aún más el equipo para la próxima temporada.',
    },
  ]);

  const [resultados, setResultados] = useState([
    {
      id: 1,
      titulo: 'Resultados del último partido',
      contenido: 'Taddey FC ganó el último partido con un marcador de 3-1 contra su rival. Fue un emocionante enfrentamiento que mantuvo a los fanáticos al borde de sus asientos. Los jugadores demostraron su habilidad y dedicación en cada minuto del juego. ¡Una victoria para recordar!',
    },
  ]);

  return (
    <div>
      <SeccionNoticias categoria="Últimos Fichajes" noticias={fichajes} />

      <SeccionNoticias categoria="Resultados Recientes" noticias={resultados} />

      <Destacado />
    </div>
  );
};

export default Noticias;





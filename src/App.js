import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Historia from './componentes/Historia';
import Jugadores from './componentes/Jugadores';
import Estadio from './componentes/Estadio';
import Contacto from './componentes/Contacto';
import Noticias from './componentes/Noticias'; // Asegúrate de importar Noticias

const App = () => {
  const [estado, setEstado] = useState('');

  return (
    <Router>
      <div>
        {/* Barra de Navegación */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/home">
            Taddey Fc
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/historia">
                  Historia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Jugadores">
                  Jugadores
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Estadio">
                  Estadio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Contenido */}
        <div className="container mt-4">
          {/* Rutas */}
          <Routes>
            <Route path="/home" element={<Noticias />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/jugadores" element={<Jugadores />} />
            <Route path="/estadio" element={<Estadio />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;





import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>🛡️ Infografía: La Tríada de la Seguridad</h1>
        <p>¿Qué protege la seguridad de la información en el mundo digital?</p>
      </header>

      <div className="cards-grid">
        <div className="card confidencialidad">
          <h2>🔒 Confidencialidad</h2>
          <p><strong>En simple:</strong> Es asegurar que la información solo la pueda ver quien tiene el permiso.</p>
          <div className="ejemplo">
            <span>Ejemplo:</span> Tus contraseñas o mensajes privados de chat.
          </div>
        </div>

        <div className="card integridad">
          <h2>📝 Integridad</h2>
          <p><strong>En simple:</strong> Es garantizar que los datos no sean alterados, modificados o destruidos por intrusos.</p>
          <div className="ejemplo">
            <span>Ejemplo:</span> Un documento oficial o contrato que nadie puede hackear para cambiarle las cifras.
          </div>
        </div>

        <div className="card disponibilidad">
          <h2>⚡ Disponibilidad</h2>
          <p><strong>En simple:</strong> Es asegurar que la información y los servicios estén accesibles cuando se necesiten.</p>
          <div className="ejemplo">
            <span>Ejemplo:</span> Que puedas entrar a ver tus notas o ver una serie a cualquier hora sin que la web se caiga.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
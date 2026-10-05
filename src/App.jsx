import React from 'react';
import './App.css';
import { Lock, ShieldCheck, Zap, Eye, FileCheck, Server } from 'lucide-react';

function App() {
  return (
    <div className="main-wrapper">
      <div className="hero-background"></div>
      <div className="container">
        <header className="header">
          <div className="header-icon-container">
            <ShieldCheck className="header-main-icon" size={64} strokeWidth={1.5} />
          </div>
          <h1>🛡️ Infografía: La Tríada de la Seguridad</h1>
          <p>¿Qué protege la seguridad de la información en el mundo digital?</p>
          <p className="subtitle-small">Descubre los pilares fundamentales de la Ciberseguridad explicados para todos.</p>
        </header>

        <div className="cards-grid">
          {/* Tarjeta Confidencialidad */}
          <div className="card neumorphic-card">
            <div className="card-icon-wrapper confidencialidad-icon">
              <Lock size={36} />
              <Eye className="sub-icon" size={16} />
            </div>
            <h2>Confidencialidad</h2>
            <p className="card-definition"><strong>En simple:</strong> Es asegurar que la información solo la pueda ver quien tiene el permiso.</p>
            <div className="ejemplo-container">
              <h4>🔒 Ejemplos Cotidianos:</h4>
              <ul>
                <li>Tus contraseñas secretas</li>
                <li>Mensajes privados de chat</li>
                <li>Tu historial médico</li>
              </ul>
            </div>
          </div>

          {/* Tarjeta Integridad */}
          <div className="card neumorphic-card">
            <div className="card-icon-wrapper integridad-icon">
              <FileCheck size={36} />
              <Zap className="sub-icon" size={16} />
            </div>
            <h2>Integridad</h2>
            <p className="card-definition"><strong>En simple:</strong> Es garantizar que los datos no sean alterados, modificados o destruidos por intrusos.</p>
            <div className="ejemplo-container">
              <h4>📝 Ejemplos Cotidianos:</h4>
              <ul>
                <li>Un contrato digital firmado</li>
                <li>Tus notas universitarias</li>
                <li>Una transferencia bancaria segura</li>
              </ul>
            </div>
          </div>

          {/* Tarjeta Disponibilidad */}
          <div className="card neumorphic-card">
            <div className="card-icon-wrapper disponibilidad-icon">
              <Server size={36} />
              <Zap className="sub-icon" size={16} />
            </div>
            <h2>Disponibilidad</h2>
            <p className="card-definition"><strong>En simple:</strong> Es asegurar que la información y los servicios estén accesibles cuando se necesiten.</p>
            <div className="ejemplo-container">
              <h4>⚡ Ejemplos Cotidianos:</h4>
              <ul>
                <li>Tu cuenta de Netflix o Spotify</li>
                <li>El cajero automático 24/7</li>
                <li>Página web de ventas online</li>
              </ul>
            </div>
          </div>
        </div>
        
        <footer className="final-footer">
          <p>Actividad - Seguridad de la Información - Desarrollado en React</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import { Lock, ShieldAlert, Zap, Eye, CheckCircle2, CloudLightning, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="cyber-space">
      {/* Círculos de luz flotantes en el fondo para dar efecto vivo */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>

      <div className="content-container">
        <header className="hero-header">
          <div className="badge-pill">
            <Sparkles size={16} /> Ciberseguridad Interactiva
          </div>
          <h1>La Tríada CIA</h1>
          <p className="hero-subtitle">Los tres pilares esenciales que sostienen toda la seguridad digital del mundo moderno.</p>
        </header>

        <div className="cards-wrapper">
          {/* Tarjeta 1: Confidencialidad */}
          <div className="glass-card card-confidentiality">
            <div className="card-top">
              <div className="icon-box">
                <Lock size={28} />
              </div>
              <span className="card-tag">Pilar 01</span>
            </div>
            <h2>Confidencialidad</h2>
            <p className="core-desc">Asegurar que la información secreta solo sea vista por quien tiene la autorización legítima.</p>
            
            <div className="example-pill-box">
              <span className="pill-title">Ejemplos en tu día a día:</span>
              <ul>
                <li>🔑 Tus contraseñas de redes sociales</li>
                <li>💬 Mensajes cifrados de WhatsApp</li>
                <li>🏥 Tu historial médico privado</li>
              </ul>
            </div>
          </div>

          {/* Tarjeta 2: Integridad */}
          <div className="glass-card card-integrity">
            <div className="card-top">
              <div className="icon-box">
                <CheckCircle2 size={28} />
              </div>
              <span className="card-tag">Pilar 02</span>
            </div>
            <h2>Integridad</h2>
            <p className="core-desc">Garantizar que los datos estén intactos y nadie los haya modificado a tus espaldas.</p>
            
            <div className="example-pill-box">
              <span className="pill-title">Ejemplos en tu día a día:</span>
              <ul>
                <li>📝 Notas universitarias sin alterar</li>
                <li>📜 Contratos digitales originales</li>
                <li>💸 Transferencias bancarias exactas</li>
              </ul>
            </div>
          </div>

          {/* Tarjeta 3: Disponibilidad */}
          <div className="glass-card card-availability">
            <div className="card-top">
              <div className="icon-box">
                <CloudLightning size={28} />
              </div>
              <span className="card-tag">Pilar 03</span>
            </div>
            <h2>Disponibilidad</h2>
            <p className="core-desc">Garantizar que los sistemas y servicios estén siempre listos y accesibles cuando los necesites.</p>
            
            <div className="example-pill-box">
              <span className="pill-title">Ejemplos en tu día a día:</span>
              <ul>
                <li>🎬 Tu cuenta de Netflix disponible 24/7</li>
                <li>🏧 Cajeros automáticos funcionando</li>
                <li>🌐 Páginas web de compras online</li>
              </ul>
            </div>
          </div>
        </div>

        <footer className="cyber-footer">
          <p>Diseñado con pasión para proteger el futuro digital ✨</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
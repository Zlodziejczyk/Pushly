export default function ParticleSystem() {
  return (
    <div id="ambient-particles" aria-hidden="true" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      {/* Rising Particles — 8 dots floating upward */}
      <div className="rising-particle" style={{ width: '3px', height: '3px', background: 'rgba(96,165,250,0.7)', bottom: '-10px', left: '5%', animation: 'riseParticle 8s linear 0s infinite' }}></div>
      <div className="rising-particle" style={{ width: '2px', height: '2px', background: 'rgba(56,189,248,0.6)', bottom: '-10px', left: '22%', animation: 'riseParticleSlow 14s linear 0.5s infinite' }}></div>
      <div className="rising-particle" style={{ width: '3px', height: '3px', background: 'rgba(56,189,248,0.5)', bottom: '-10px', left: '40%', animation: 'riseParticleSlow 12s linear 2s infinite' }}></div>
      <div className="rising-particle" style={{ width: '2px', height: '2px', background: 'rgba(96,165,250,0.8)', bottom: '-10px', left: '55%', animation: 'riseParticle 7s linear 4s infinite' }}></div>
      <div className="rising-particle" style={{ width: '2px', height: '2px', background: 'rgba(56,189,248,0.7)', bottom: '-10px', left: '68%', animation: 'riseParticle 11s linear 2.5s infinite' }}></div>
      <div className="rising-particle" style={{ width: '3px', height: '3px', background: 'rgba(234,179,8,0.35)', bottom: '-10px', left: '80%', animation: 'riseParticleSlow 13s linear 0.8s infinite' }}></div>
      <div className="rising-particle" style={{ width: '2px', height: '2px', background: 'rgba(167,139,250,0.5)', bottom: '-10px', left: '88%', animation: 'riseParticle 10s linear 3.5s infinite' }}></div>
      <div className="rising-particle" style={{ width: '3px', height: '3px', background: 'rgba(52,211,153,0.4)', bottom: '-10px', left: '32%', animation: 'riseParticleSlow 14s linear 3.8s infinite' }}></div>

      {/* Static Twinkling Particles — 4 subtle stars */}
      <div className="rising-particle" style={{ width: '2px', height: '2px', background: 'rgba(96,165,250,0.6)', position: 'fixed', top: '25%', left: '28%', animation: 'twinkle 3s ease-in-out infinite' }}></div>
      <div className="rising-particle" style={{ width: '2px', height: '2px', background: 'rgba(56,189,248,0.5)', position: 'fixed', top: '60%', left: '70%', animation: 'twinkle 4s ease-in-out 1s infinite' }}></div>
      <div className="rising-particle" style={{ width: '3px', height: '3px', background: 'rgba(147,197,253,0.4)', position: 'fixed', top: '15%', left: '82%', animation: 'twinkle 3.5s ease-in-out 2s infinite' }}></div>
      <div className="rising-particle" style={{ width: '2px', height: '2px', background: 'rgba(234,179,8,0.3)', position: 'fixed', top: '50%', left: '5%', animation: 'twinkle 4.2s ease-in-out 2.5s infinite' }}></div>
    </div>
  );
}

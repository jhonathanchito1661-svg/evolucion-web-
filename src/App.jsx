import { useState } from 'react';
import Web1 from './components/Web1';
import Web2 from './components/Web2';
import Web3 from './components/Web3';

function App() {
  // Este estado controla qué versión se muestra en pantalla
  const [version, setVersion] = useState('1.0');

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ 
        backgroundColor: '#2c3e50', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '20px' 
      }}>
        <h1>Evolución de la Web</h1>
        <p>Jonathan Morales - Facultad de Informática, Electrónica y Comunicación</p>
      </header>

      {/* Menú de Navegación */}
      <nav style={{ marginBottom: '30px' }}>
        <button 
          onClick={() => setVersion('1.0')} 
          style={botonEstilo(version === '1.0', '#95a5a6')}>
          Web 1.0
        </button>
        
        <button 
          onClick={() => setVersion('2.0')} 
          style={botonEstilo(version === '2.0', '#3498db')}>
          Web 2.0
        </button>
        
        <button 
          onClick={() => setVersion('3.0')} 
          style={botonEstilo(version === '3.0', '#9b59b6')}>
          Web 3.0
        </button>
      </nav>

      {/* Renderizado Condicional: Aquí ocurre la magia */}
      <main style={{ 
        minHeight: '350px', 
        padding: '20px', 
        border: '1px solid #eee', 
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        {version === '1.0' && <Web1 />}
        {version === '2.0' && <Web2 />}
        {/* Usamos 'key' para que el efecto de carga de la IA se reinicie al hacer clic */}
        {version === '3.0' && <Web3 key={version} />}
      </main>

      <footer style={{ marginTop: '40px', color: '#888', fontSize: '0.9em' }}>
        <p>Universidad de Panamá | Gerencia de Comercio Electrónico</p>
      </footer>
    </div>
  );
}

// Función para el diseño de los botones
const botonEstilo = (activo, color) => ({
  padding: '12px 25px',
  margin: '0 8px',
  cursor: 'pointer',
  backgroundColor: activo ? color : '#f0f0f0',
  color: activo ? 'white' : '#333',
  border: 'none',
  borderRadius: '25px',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  boxShadow: activo ? '0 4px 10px rgba(0,0,0,0.2)' : 'none'
});

export default App;
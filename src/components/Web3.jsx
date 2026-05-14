import { useState, useEffect } from 'react';

const Web3 = () => {
  // Estado para manejar la carga de la "IA"
  const [cargando, setCargando] = useState(true);
  // Estado para el mensaje predictivo
  const [mensajeIA, setMensajeIA] = useState("");

  useEffect(() => {
    // Simulamos el procesamiento de datos de la Web Semántica
    const timer = setTimeout(() => {
      setMensajeIA("Hola Jonathan, analizando tu perfil de E-commerce: Sugiero integrar una pasarela de pagos con Criptoactivos.");
      setCargando(false);
    }, 3000); // Espera de 3 segundos

    // Limpieza del timer si el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #9b59b6', 
      backgroundColor: '#f5eef8', 
      borderRadius: '8px',
      marginTop: '20px'
    }}>
      <h1>Web 3.0: La Web Inteligente</h1>
      <p>Utiliza IA y datos semánticos para personalizar la experiencia.</p>
      
      {cargando ? (
        <div style={{ padding: '20px' }}>
          <div className="spinner">🤖</div>
          <p>Procesando datos con Inteligencia Artificial...</p>
        </div>
      ) : (
        <div style={{ 
          padding: '15px', 
          backgroundColor: 'white', 
          borderLeft: '5px solid #9b59b6',
          borderRadius: '4px',
          animation: 'fadeIn 1s' 
        }}>
          <strong>Respuesta de la IA:</strong>
          <p style={{ fontStyle: 'italic', color: '#8e44ad' }}>"{mensajeIA}"</p>
        </div>
      )}
      
      <p style={{ marginTop: '15px', fontSize: '0.9em' }}>
        <i>Tecnología: Simulación asíncrona con useEffect + setTimeout.</i>
      </p>
    </div>
  );
};

export default Web3;
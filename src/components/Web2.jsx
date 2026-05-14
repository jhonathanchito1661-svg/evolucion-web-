import { useState } from 'react';

const Web2 = () => {
  // Estado para el texto que se está escribiendo
  const [comentario, setComentario] = useState("");
  // Estado para la lista de comentarios publicados
  const [lista, setLista] = useState([]);

  const manejarEnvio = () => {
    if (comentario.trim() !== "") {
      setLista([...lista, comentario]); // Agrega el nuevo comentario a la lista
      setComentario(""); // Limpia el cuadro de texto
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #3498db', 
      backgroundColor: '#ebf5fb', 
      borderRadius: '8px',
      marginTop: '20px' 
    }}>
      <h1>Web 2.0: La Web Social</h1>
      <p>A diferencia de la 1.0, aquí el usuario crea contenido e interactúa.</p>
      
      <div style={{ marginBottom: '15px' }}>
        <input 
          type="text" 
          value={comentario} 
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Escribe un comentario..."
          style={{ padding: '8px', width: '70%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={manejarEnvio}
          style={{ padding: '8px 15px', marginLeft: '5px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Publicar
        </button>
      </div>

      <div style={{ textAlign: 'left', backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
        <strong>Comentarios en vivo:</strong>
        {lista.length === 0 ? (
          <p style={{ color: '#888' }}>No hay comentarios aún.</p>
        ) : (
          <ul>
            {lista.map((item, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <p><i>Ejemplo: Redes sociales, blogs y wikis.</i></p>
    </div>
  );
};

export default Web2;
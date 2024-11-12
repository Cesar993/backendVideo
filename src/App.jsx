import { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleDownload = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/download_audio/", { url });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error al descargar el audio.");
    }
  };
  

  return (
    <div>
      <input
        placeholder="Indique el URL del video"
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)} // Actualiza el valor de url
      />
      <button onClick={handleDownload}>Descargar Audio</button>
      <p>{message}</p>  {/* Muestra el mensaje */}
    </div>
  );
}

export default App;

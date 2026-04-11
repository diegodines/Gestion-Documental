import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [mensaje, setMensaje] = useState('Cargando estado del sistema...')
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('/api/status')
      .then((response) => {
        setMensaje(response.data.mensaje || "Sistema de Gestión Operativo (Conectado con éxito)")
      })
      .catch((error) => {
        console.error("Error al conectar con el backend:", error)
        setError("Error de conexión con el middleware.")
      })
  }, [])

  return (
    <div className="App">
      <h1>Panel de Control - Grupo 8</h1>

      <div className="status-card">
        <h2>Estado de la Conexión:</h2>
        {error ? (
          <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>
        ) : (
          <p style={{ color: 'green', fontWeight: 'bold' }}>{mensaje}</p>
        )}
      </div>
    </div>
  )
}

export default App
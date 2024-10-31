import React, { useEffect, useState } from "react";
import axios from "axios"; 

const TemperatureDisplay = () => {
  const [temperatures, setTemperatures] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTemperatures = async () => {
      try {
        const response = await axios.get("/api/temperatura/"); 
        setTemperatures(response.data);
      } catch (err) {
        setError("Erro ao carregar os dados de temperatura.");
      }
    };

    fetchTemperatures();
  }, []);

  return (
    <div>
      <h1>Temperaturas Registradas</h1>
      {error && <p className="error">{error}</p>}
      <ul>
        {temperatures.map((data) => (
          <li key={data.id}>
            Temperatura: {data.temperature} °C - Registrado em: {new Date(data.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemperatureDisplay;

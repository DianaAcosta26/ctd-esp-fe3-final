import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//PENDIENTE Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams(); // Obtén el ID dinámico de la URL
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch para obtener el detalle de un dentista en específico
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos del dentista");
        }
        return response.json();
      })
      .then((data) => {
        setDentist(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando detalles del dentista...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="detail">
      <h1>Detalle del Dentista</h1>
      {dentist ? (
        <div className="detail-card">
          <p><strong>Nombre:</strong> {dentist.name}</p>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Teléfono:</strong> {dentist.phone}</p>
          <p>
            <strong>Sitio web:</strong>{" "}
            <a href={`https://${dentist.website}`} target="_blank" rel="noreferrer">
              {dentist.website}
            </a>
          </p>
        </div>
      ) : (
        <p>Información no disponible.</p>
      )}
    </div>
  )
}

export default Detail
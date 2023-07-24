import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Results = () => {
  const draggedNumber = useSelector((state) => state.draggedNumber);
  const resetPage = () => {
    window.location.href = "/";
  };

  let message = "No se ha seleccionado ningún número en el ejercicio.";
  let color = "black";

  if (draggedNumber === "3") {
    message = "Número seleccionado en el ejercicio: 3 (Respuesta correcta)";
    color = "green";
  } else if (draggedNumber !== null) {
    message = `Número seleccionado en el ejercicio: ${draggedNumber} (Respuesta incorrecta)`;
    color = "red";
  }

  return (
    <div id="results">
      <h1>Resultados</h1>
      <p style={{ color }}>{message}</p>
      {draggedNumber ? (
        <button onClick={resetPage}>Reiniciar web y volver a intentarlo</button>
      ) : (
        <Link to="/">
          <button>Volver a Inicio</button>
        </Link>
      )}
    </div>
  );
};

export default Results;

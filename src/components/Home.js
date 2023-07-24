import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const exerciseSaved = useSelector((state) => state.exerciseSaved);
  const deniedAcess = () => {
	alert("Ejercicio ya guardado. No puedes volver a realizarlo.");
  }

  return (
    <div>
      <h1>Inicio</h1>
      {exerciseSaved ? (
          <button onClick={deniedAcess}>Ir al ejercicio de Drag & Drop</button>
      ) : (
        <Link to="/dragdrop">
          <button>Ir al ejercicio de Drag & Drop</button>
        </Link>
      )}
      <Link to="/results">
        <button>Ver resultados del ejercicio</button>
      </Link>
    </div>
  );
};

export default Home;

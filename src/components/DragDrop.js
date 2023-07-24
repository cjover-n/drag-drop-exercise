import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDraggedNumber, saveExercise } from "../actions";
import { useNavigate } from 'react-router-dom';

import "../App.css";

const DragDrop = () => {
  const dispatch = useDispatch();
  const exerciseCompleted = useSelector((state) => state.exerciseSaved);
  const [droppedNumber, setDroppedNumber] = useState(null);
  const [canDragNumbers, setCanDragNumbers] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (exerciseCompleted) {
      setCanDragNumbers(false);
    }
  }, [exerciseCompleted]);

  const handleDragStart = (event, number) => {
    event.dataTransfer.setData("number", number);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    const number = event.dataTransfer.getData("number");
    setDroppedNumber(number);
    dispatch(setDraggedNumber(number));
  };

  const handleSave = () => {
    dispatch(saveExercise());
    setCanDragNumbers(false);
	navigate("/");
  };

  const renderNumbers = () => {
    const numbers = [1, 2, 3, 4, 5];
    return numbers.map((number) => (
      <div
        key={number}
        className="number"
        draggable={!exerciseCompleted && canDragNumbers}
        onDragStart={(event) => handleDragStart(event, number)}
      >
        {number}
      </div>
    ));
  };

  return (
    <div>
      <h1>Ejercicio de Arrastrar Números</h1>
	  <p>¿Cuántos mosqueteros acompañaban a D'Artagnan en la famosa novela de Alejandro Dumas?</p>
      <div className="canvas">
        {renderNumbers()}
        <div className="circle" onDragOver={handleDragOver} onDrop={handleDrop}>
          {droppedNumber ? (
            <p>Número arrastrado: {droppedNumber}</p>
          ) : (
            <p>Arrastra el número aquí</p>
          )}
        </div>
      </div>
      {exerciseCompleted ? (
        <div>
          <p>Ejercicio guardado. No puedes volver a editarlo.</p>
        </div>
      ) : (
        <>
          <button onClick={handleSave}>Guardar ejercicio</button>
        </>
      )}
    </div>
  );
};

export default DragDrop;

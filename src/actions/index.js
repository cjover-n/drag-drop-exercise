export const saveExercise = () => {
	return {
	  type: 'SAVE_EXERCISE',
	};
  };
  
  export const setDraggedNumber = (number) => {
	return {
	  type: 'SET_DRAGGED_NUMBER',
	  payload: number,
	};
  };

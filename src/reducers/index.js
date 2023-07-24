const initialState = {
  exerciseSaved: false,
  draggedNumber: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_EXERCISE":
      return {
        ...state,
        exerciseSaved: true,
      };
    case "SET_DRAGGED_NUMBER":
      return {
        ...state,
        draggedNumber: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

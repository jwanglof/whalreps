import {
  ADD_SET,
  REMOVE_SET,
  INCREASE_SET_ID,
  ADD_REPETITION_TO_SET
} from "../actions/types/set";

// Start with the ID on 1 so that a regular user isn't confused if it says 0 in the UI
const initialState = {
  sets: [],
  currentSetId: 1
};

function set(state = initialState, action) {
  const clone = Object.assign({}, state);

  switch (action.type) {
    case ADD_SET:
      const dataWithId = {
        data: action.data,
        id: clone.currentSetId
      };
      clone.sets.push(dataWithId);
      return clone;
    case REMOVE_SET:
      console.log("Should remove set from this:", clone);
      return clone;
    case INCREASE_SET_ID:
      clone.currentSetId += 1;
      return clone;
    case ADD_REPETITION_TO_SET:
      console.log("ADD_REPETITION_TO_SET", clone, action);
      return clone;
    default:
      return clone;
  }
}

export default set;

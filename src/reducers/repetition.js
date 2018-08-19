import {
  ADD_REPETITION,
  INCREASE_REPETITION_ID,
  REMOVE_REPETITION
} from "../actions/types/repetition";

// Start with the ID on 1 so that a regular user isn't confused if it says 0 in the UI
const initialState = {
  repetitions: [],
  currentRepetitionId: 1
};

const emptyRepetition = {
  weight: 0,
  repetitions: 0
};

function repetition(state = initialState, action) {
  const clone = Object.assign({}, state);

  switch (action.type) {
    case ADD_REPETITION:
      const dataWithId = {
        data: action.data,
        id: clone.currentRepetitionId
      };
      clone.repetitions.push(dataWithId);
      return clone;
    case REMOVE_REPETITION:
      console.log(
        "Should remove repetition from this:",
        clone,
        ", from action:",
        action
      );
      return clone;
    case INCREASE_REPETITION_ID:
      clone.currentRepetitionId += 1;
      return clone;
    case "GET_EMPTY_REPETITION_WITH_ID":
      return clone;
    default:
      return clone;
  }
}

export default repetition;

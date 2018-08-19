import {
  ADD_SET,
  REMOVE_SET,
  INCREASE_SET_ID,
  ADD_REPETITION_TO_SET
} from "../types/set";

export function addSet(data) {
  return { type: ADD_SET, data };
}

export function removeSet(index) {
  return { type: REMOVE_SET, index };
}

export function increaseSetId() {
  return { type: INCREASE_SET_ID };
}

export function addRepetitionToSet(data) {
  return { type: ADD_REPETITION_TO_SET, data };
}

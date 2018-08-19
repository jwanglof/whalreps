import {
  ADD_REPETITION,
  INCREASE_REPETITION_ID,
  REMOVE_REPETITION
} from "../types/repetition";

export function addRepetition(data) {
  return { type: ADD_REPETITION, data };
}

export function removeRepetition(index) {
  return { type: REMOVE_REPETITION, index };
}

export function increaseRepetitionId() {
  return { type: INCREASE_REPETITION_ID };
}

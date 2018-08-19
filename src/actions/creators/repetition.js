import {
  ADD_REPETITION,
  GET_EMPTY_REPETITION_WITH_ID,
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

export function getEmptyRepetitionWithId() {
  return { type: GET_EMPTY_REPETITION_WITH_ID };
}

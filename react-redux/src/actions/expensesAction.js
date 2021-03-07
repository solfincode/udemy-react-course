import { v1 as uuid } from "uuid";
export const ADD_EXPENSE = "ADD_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
export const EDIT_EXPENSE = "EDIT_EXPENSE";
//create action creator of addExpense
//type of action
//data object what they deal with
export function addExpense({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
}) {
  return {
    type: ADD_EXPENSE,
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt,
    },
  };
}

export function removeExpense({ id } = {}) {
  return {
    type: REMOVE_EXPENSE,
    id,
  };
}

export function editExpense(id, updates) {
  return {
    type: EDIT_EXPENSE,
    id,
    updates,
  };
}

import { TodoActionType } from "./../constants/todoConstant";
const { ADD_TODO } = TodoActionType;
export interface ITodoState {
  task: string;
}
type ITodoAction = {
  type: TodoActionType;
  payload: string;
};
export const todoReducer = (state: ITodoState, action: ITodoAction) => {
  const { type, payload } = action;
  console.log("reducer", state);

  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        task: payload,
      };

    default:
      return state;
  }
};

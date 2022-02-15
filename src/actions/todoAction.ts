import { TodoActionType } from './../constants/todoConstant';
const {ADD_TODO} = TodoActionType

export const atcAddTodo = (payload: string) => ({
    type: ADD_TODO,
    payload,
});
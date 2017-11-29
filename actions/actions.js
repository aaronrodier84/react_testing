import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const LOAD_DATA = 'LOAD_DATA';
export const COMPLETE_DATA = 'COMPLETE_DATA';
export const DELETE_DATA = 'DELETE_DATA';

let nextTodoId = 0;

export function addTodo(text) {
   return {
      type: ADD_TODO,
      id: nextTodoId++,
      text
   };
}

export function loadData(data) {
   return {
      type: LOAD_DATA,
      payload: data
   };
}

export function complete_data(data) {
   return {
      type: COMPLETE_DATA,
      payload: data
   };
}

export function delete_data(data) {
   return {
      type: DELETE_DATA,
      payload: data
   };
}
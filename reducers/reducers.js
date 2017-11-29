import { combineReducers } from 'redux'
import { ADD_TODO, LOAD_DATA , COMPLETE_DATA, DELETE_DATA} from '../actions/actions'

function todo(state, action) {
    switch (action.type) {

        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
            }

        default:
            return state
    }
}

function todos(state = [], action = {}) {
    switch (action.type) {

        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
        ]

        case LOAD_DATA:
            return [
                ...state,
                ...action.payload.data
        ]

        case COMPLETE_DATA:
            return [
                ...state,
                ...action.payload.data
        ]

        case DELETE_DATA:
            return [
                ...state,
                ...action.payload.data
        ]
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos
})

export default todoApp
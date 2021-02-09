import {ADD_TODO, DELETE_TODO, UPDATE_TODO, FINISHED_TODO} from "./actions"
import { todos } from "./states";

export let reducer = (state = todos, action) => {
    // console.log(`Type: ${action.type} action: ${action.playload}`)

    switch(action.type) {
        case ADD_TODO:
            let newTodos = [...state]
            newTodos.push(action.payload)
            return newTodos

        case DELETE_TODO: 
            console.log("Delete id : ",action.payload)
            let deleteTodos = [...state]
            deleteTodos = deleteTodos.filter((todo) => todo.id !== action.payload)
            return deleteTodos

        case UPDATE_TODO:
            // console.log("Update...",action.payload)
            let updTodos = [...state]
            updTodos.map((todo, index) => {
                if(todo.id === action.payload.id) {
                    updTodos[index] = action.payload
                }
            })
            return updTodos

        case FINISHED_TODO : 
            let fnTodos = [...state]
            fnTodos.map((todo) => {
                if(todo.id === action.payload) {
                    todo.finished ? todo.finished=false: todo.finished=true
                }
            })
            return fnTodos

        default:
            // console.log("Default")
            break;
    }
    return state
}
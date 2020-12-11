import { act } from "react-dom/test-utils";
import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from "./actions"
import { todos } from "./states";

export let reducer = (state = todos, action) => {
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
            // let index = -1
            // for(let i = 0; i < updTodos.length; i++) {
            //     index++
            //     if(updTodos[i].id === action.payload.id) {
            //         break;
            //     }
            // }
            // if(index !== -1) {
            //     updTodos[index] = action.payload
            //     return updTodos
            // }

        default:
            console.log("Default")
            break;
    }
    return state
}
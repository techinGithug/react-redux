import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

function TodoList() {
    const todos = useSelector(state => state)
    console.log(todos)
    return (
        <div className="my-3">
            {
                todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />
                })
            }
        </div>
    )
}

export default TodoList

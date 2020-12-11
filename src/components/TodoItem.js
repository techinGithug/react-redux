import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/actions'

function TodoItem({ todo }) {
    console.log(todo.name)
    const [name, setName] = useState(todo.name)
    const [editable, setEditable] = useState(false)
    let dispatch = useDispatch()
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div className="m-1">{todo.id}</div>
                <div className="col m-1">
                    {editable ? 
                        <input 
                            type="text" 
                            className="form-control" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        : 
                        <h4>{todo.name}</h4>}
                </div>
                <button className="btn btn-primary m-1"
                    onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            name:name
                        }))
                        if(editable) {setName(name)}
                        setEditable(!editable)
                    }}
                >{editable ? "Update":"Edit"}</button>
                <button className="btn btn-danger m-1"
                    onClick = {() =>  dispatch(deleteTodo(todo.id))}
                >Delete</button>
            </div>
        </div>
    )
}

export default TodoItem

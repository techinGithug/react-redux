import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/actions'

function TodoInput() {
    const [name, setName] = useState('')

    const dispatch = useDispatch()
    const todos = useSelector(state => state)
    console.log(todos)

    useEffect(() => {
        // console.log("User effect...");
    });

    return (
        <div>
            <div className="row m-1">
                <input 
                    className="col form control"
                    type="text"   
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name="addTodo"
                />
                <button className="btn btn-primary mx-2"
                    onClick={() => {
                        if(name === "" || name === null){
                            return;
                        }
                        let count = 0
                        todos.map((todo) => {
                            count = todo.id
                        })
                        dispatch(
                            addTodo(
                                {
                                    id:(count+1),
                                    name:name
                                }
                            )
                        )}}
                >Add</button>
            </div>
        </div>

    )
}

export default TodoInput

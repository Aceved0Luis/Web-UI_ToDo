import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Todos } from '../constants/todos'

export function Home(){
    
    const [todo, setTodo] = useState("")

    useEffect(()=> {
        setTodo(Todos)
    },[todo])
    
    return (
        <>
        <h1 className="titulo">TODO list</h1>
        <div className='container'>
            <ul>
                {todo ? todo.map((todo) => (
                <Link to={"/details/"+todo.title}>
                    <li key={todo.title} className="card">
                        <h3>{todo.title}</h3>
                    </li>
                </Link>
                )) : <li>sin datos...</li>}
            </ul>
            <Link to="/add"><button className="btn">Add TODO</button></Link>
        </div>
        </>

    )
}
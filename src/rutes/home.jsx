import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAll } from '../store/todoSlice';

export function Home(){    
    
    const value = useSelector((state)=> (state.todoReducer))
    const dispatch = useDispatch();

    return (
        <>
        <h1 className="titulo">TODO list</h1>
        <div className='container'>
            <ul>
                {value[0] ? value[0].map((todo) => (
                <Link to={"/details/"+todo.title}>
                    <li key={todo.title} className="card">
                        <h3>{todo.title}</h3>
                    </li>
                </Link>
                )) : <li>sin datos...</li>}
            </ul>
            <Link to="/add"><button className="btn">Add TODO</button></Link>
            <button className="btn" onClick={() => dispatch(deleteAll())}>Delete TODOS</button>
        </div>
        </>
    )
}
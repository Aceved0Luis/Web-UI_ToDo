import { Link,useParams } from "react-router-dom"
import { Input } from "../components/input"
import { useDispatch, useSelector } from 'react-redux'
import { detail } from '../store/todoSlice';
import { useEffect } from "react";


export function Details(){
    
    const data = useSelector((state)=> (state.todoReducer))
    const dispatch = useDispatch()
    const parameters = useParams();

    useEffect(()=>{
        dispatch(detail({
            id: parameters.id
        }))
    },[])
    
    return(
        <>
        <h1>Details TODO</h1>
        <div className="container">
            {data ? data.map((todo) => (
                <div className="add" key={todo.title}>
                    <Input tipo={"text"} valor={todo.title} block={true}/>
                    <textarea value={todo.description} disabled={true} />
                    <Input tipo={"text"} valor={todo.time} block={true}/>
                </div>)):<div>paso algo...</div>
            }
            <Link to="/"><button className="btn-enviar">Volver</button></Link>
        </div>
        </>
    )
}
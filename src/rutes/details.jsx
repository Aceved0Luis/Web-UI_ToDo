import { Link,useParams } from "react-router-dom"
import { Input } from "../components/input"
import { useDispatch, useSelector } from 'react-redux'
import { detail } from '../store/todoSlice';
import { useEffect, useState } from "react";


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
            {data.map((todo) => (
                <div className="add">
                    <Input tipo={"text"} valor={data.title} block={true}/>
                    <textarea value={data.description} disabled={true} />
                    <Input tipo={"text"} valor={data.time} block={true}/>
                </div>))
            }
            <Link to="/"><button className="btn-enviar">Volver</button></Link>
        </div>
        </>
    )
}
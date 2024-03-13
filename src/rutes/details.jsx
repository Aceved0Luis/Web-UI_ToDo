import { Link,useParams } from "react-router-dom"
import { Input } from "../components/input"
import { useContext } from "react";
import { TodoContext } from "../context";


export function Details(){

    const parameters = useParams();
    const context = useContext(TodoContext)
    const todoDetails = context[0].filter(todo => todo.title === parameters.id)

    return(
        <>
        <h1>Details TODO</h1>
        <div className="container">
            {todoDetails.map((todo) => (
                <div className="add" key={todo.title}>
                    <Input tipo={"text"} valor={todo.title} block={true}/>
                    <textarea value={todo.description} disabled={true} />
                    <Input tipo={"text"} valor={todo.time} block={true}/>
                </div>))
            }
            <Link to="/"><button className="btn-enviar">Volver</button></Link>
        </div>
        </>
    )
}
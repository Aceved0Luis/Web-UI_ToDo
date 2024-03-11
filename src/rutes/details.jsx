import { Link,useParams } from "react-router-dom"
import { Input } from "../components/input"

export function Details(){
    const parameters = useParams();
    return(
        <>
        <h1>Details TODO</h1>
        <div className="container">
            <div className="add">
                <Input tipo={"text"} valor={parameters.id}/>
                <textarea />
                <Input tipo={"text"}/>
                <Link to="/"><button className="btn-enviar">Volver</button></Link>
            </div>
        </div>
        </>
    )
}
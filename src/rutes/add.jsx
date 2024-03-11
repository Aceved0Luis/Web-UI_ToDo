import { useNavigate } from "react-router-dom";
import { Input } from "../components/input";
import { Todos } from "../constants/todos";
import { useLocalStorage } from "../uselocalstorage";

export function Add(){
    const [name, setName] = useLocalStorage('name','')
    const [description, setDescription] = useLocalStorage('description','')
    const [date, setDate] = useLocalStorage('date','')
    const [datos, setDatos] = useLocalStorage('datos',Todos)
    const navigate = useNavigate();

    //console.log(datos)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length > 0 && description.length > 0 && date.length > 0) {
            const nombre=name
            const descripcion=description
            const fecha=date
            setName("")
            setDescription("")
            setDate("")
            const newTodos = [...datos, {title:nombre,
                description:descripcion,
                time:fecha}]
            setDatos(newTodos)
            navigate("/");
        }else{
            alert("Debes llenar todos los campos")
        }
    }

    return(
        <>
        <h1>New TODO</h1>
        <div className="container">
            <form className="add" onSubmit={handleSubmit}>
                <Input tipo={"text"} nombre={"title"} valor={name} cambio={(e) => setName(e.target.value)} fondo={"name´s todo"} />
                <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description´s todo"/>
                <Input tipo={"date"} nombre={"date"} valor={date} cambio={(e) => setDate(e.target.value)}/>
                <button className="btn-enviar" type="submit">Guardar</button>
            </form>
        </div>
        </>
    )
}

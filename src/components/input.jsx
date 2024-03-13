export function Input({tipo,nombre=null,valor=null,cambio=null, fondo=null, block=false}){
    return(
        <input type={tipo} name={nombre} value={valor} onChange={cambio} placeholder={fondo} disabled={block}/>
    )
}
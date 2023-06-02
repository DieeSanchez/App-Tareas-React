import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario ({tareas, setTareas, tarea, setTarea}){
    const [nombre, setNombre]= useState("");
    const [email, setEmail]= useState("");
    const [fecha, setFecha]= useState("");
    const [des, setDes]= useState("");

    //state de validacion
    const [error, setError]=useState(false);

    useEffect(() => {
        if(Object.keys(tarea).length > 0){
            setNombre(tarea.nombre);
            setEmail(tarea.email);
            setFecha(tarea.fecha);
            setDes(tarea.des);
        }
    }, [tarea])

    const generarId = ()=>{
        const random = Math.random().toString(20).substr(2);
        const random2 = Date.now().toString(20);

        return random+random2;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        //validar form

        if([nombre, email, fecha, des].includes("")){

            setError(true);
        }else{
            setError(false);

            const objetoTarea={
                nombre, 
                email, 
                fecha, 
                des
            }

            if(tarea.id){
                //editar registro
                objetoTarea.id = tarea.id;

                const tareasActualizados = tareas.map(tareaState => tareaState.id === tarea.id ? objetoTarea : tareaState )
                
                setTareas(tareasActualizados);
                setTarea({})

            }else{
                //nuevo registro
                objetoTarea.id=generarId();
                setTareas([...tareas, objetoTarea]);
            }

            

            //reiniciar form
            setNombre("");
            setEmail("");
            setFecha("");
            setDes("");
        }

        
    }

    return(
        <div className="sm:mb-4 md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center"> Formulario de tareas</h2>
        <p className="text-lg mt-5 text-center mb-4">
            Añade tareas y <span className="text-blue-600 font-bold">Administralas</span>
        </p>
        <form 
        onSubmit={handleSubmit}
        className=" bg-white shadow-md rounded-lg py-6 px-5">
        
        
        {error && <Error/>}

        <div className="mb-2">
            <label htmlFor="inputClick" className="block text-black font-bold
            uppercase hover:cursor-pointer">¿Quien la debe realizar?</label>
            <input type="text" 
            id="inputClick"
            placeholder="Nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
            />

        </div>
        <div className="mb-2">
            <label htmlFor="inputClick3" className="mt-4 block text-grey-700 font-bold
            uppercase hover:cursor-pointer">Email</label>
            <input type="email" 
            id="inputClick3"
            placeholder="Email@email.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </div>
        <div className="mb-2">
            <label htmlFor="inputClick4" className="mt-4 block text-grey-700 font-bold
            uppercase hover:cursor-pointer">Fecha limite</label>
            <input type="date" 
            id="inputClick4"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e)=> setFecha(e.target.value)}
            />
        </div>
        <div className="mb-2">
            <label htmlFor="inputClick5" className="mt-4 block text-grey-700 font-bold
            uppercase hover:cursor-pointer">Descripcion de la tarea a realizar</label>
            <textarea
            maxLength="400"
            id="inputClick5"
            className="mb-2 border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Breve descripcion"
            value={des}
            onChange={(e)=> setDes(e.target.value)}
            />
        </div>
            <input type="submit" 
            className="bg-blue-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-blue-800 transition-colors"
            value={tarea.id ? "Confirmar edicion" : "Agregar Tarea"}  />
        </form>
        </div>

    )
}
export default Formulario;
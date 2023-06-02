import Tarea from "./Tarea";

function ListadoTareas ({tareas, setTarea, eliminarTarea}){


    return(
        <div className="md:w-1/2 lg:w-3/5 h-screen">

            {tareas && tareas.length ? (
        <>
            <h2 className=" font-black text-3xl text-center">Listado de tareas</h2>
            <p className="mb-4 mt-5 text-center text-lg ">Seguimiento de tareas{" "}<span className=" text-orange-400 font-bold">PENDIENTES</span>:</p>
        <div className="md:h-screen md:overflow-y-scroll">

           
            {tareas.map((tarea)=>{
                return(
                    <Tarea
                    key={tarea.id}
                    tarea={tarea}
                    setTarea={setTarea}
                    eliminarTarea={eliminarTarea}
                    />
                )

            })}
        </div>
        </>
            ) :(
                <>
            <h2 className=" font-black text-3xl text-center">No existen tareas actualmente</h2>
            <p className="mb-4 mt-5 text-center text-lg ">Comienza a <span className="text-blue-600 font-bold">añadir</span> tareas</p>
                </>
            )}

        </div>
    )
}

export default ListadoTareas;
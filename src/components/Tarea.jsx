function Tarea ({tarea, setTarea, eliminarTarea}){

        const {nombre, email, fecha, des, id} = tarea;

    return(
        <>
            <div className="mr-5 ml-5 mb-5 bg-white rounded-xl shadow-xl px-5 py-8">
                <p className="mb-4 uppercase text-gray-700 font-bold">Nombre:{" "}
                    <span className="normal-case font-normal">{nombre}</span>
                </p>
                <p className="mb-4 uppercase text-gray-700 font-bold">Email:{" "}
                    <span className="normal-case font-normal">{email}</span>
                </p>
                <p className="mb-4 uppercase text-gray-700 font-bold">Fecha limite:{" "}
                    <span className="normal-case font-normal">{fecha}</span>
                </p>
                <p className="mb-4 uppercase text-gray-700 font-bold">Descripcion:{" "}
                    <br/><span className="normal-case font-normal">{des}</span>
                </p>

                <div className="flex justify-between mt-6">

                    <button className="py-2 px-6 bg-blue-600 rounded-md text-white hover:bg-blue-800 font-bold uppercase"
                    onClick={() => setTarea(tarea)}>Modificar tarea</button>

                    <button className="py-2 px-10 bg-orange-400 rounded-md text-white hover:bg-green-500 hover font-bold uppercase"
                    onClick={() => eliminarTarea(id)} >Tarea realizada</button>

                </div>
            </div>
        </>
    )
}
export default Tarea;
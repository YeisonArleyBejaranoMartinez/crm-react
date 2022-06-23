import { useNavigate } from 'react-router-dom';
const Cliente = ({cliente, handleEliminar}) => {
const navigate = useNavigate()

  return (
   <tr className='border-b hover:bg-gray-50'>
       <th className='p-3'>{cliente.nombre}</th>
       <th className='p-3'>
            <p> <span className='text-gray-800 text-left uppercase font-bold'>Email:</span> {cliente.email}</p>
            <p> <span className='text-gray-800 text-left uppercase font-bold'>Telefono:</span> {cliente.telefono}</p>
           
        </th>
       <th className='p-3'>{cliente.empresa}</th>
       <th>
            <button
            className='bg-yellow-500 hover:bg-yellow-600 block w-full p-2  text-white uppercase font-bold text-xs  '
            onClick={()=>navigate(`/clientes/${cliente.id}`)}
           >Ver</button>
           <button
            className='bg-blue-600 hover:bg-blue-700 block w-full p-2  text-white uppercase font-bold text-xs mt-3'
            onClick={()=>navigate(`/clientes/editar/${cliente.id}`)}
           >Editar</button>
        <button 
          className='bg-red-600 hover:bg-red-700 block w-full p-2  text-white uppercase font-bold text-xs mt-3'
          onClick={()=>handleEliminar(cliente.id)}
           >Eliminar</button>
       </th>
      
     </tr>
  )
}

export default Cliente
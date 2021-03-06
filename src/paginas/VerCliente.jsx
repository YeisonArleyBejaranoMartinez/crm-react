import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'


const VerCliente = () => {
  const { id } = useParams()
  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    
    const optenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json();
        setCliente(resultado)
      } catch (error) {
        console.log(error)
      }
        setCargando(!cargando); 
      
    }
    optenerClienteAPI();
  }, [])


  return (
    cargando ? <Spinner/>: Object.keys(cliente).length === 0 ? <p>No hay resultados</p>:(

    <div>
          <h1 className='text-4xl text-blue-900 mt-10'>{cliente.nombre}</h1>
          <p className='mt-3'>Informacion del cliente</p>
          <p className='text-2xl text-gray-500 mt-4'>
            <span className=' text-gray-800 uppercase font-bold'>Cliente:</span>
            {cliente.nombre}
          </p>
          <p className='text-2xl text-gray-500 mt-4'>
            <span className=' text-gray-800 uppercase font-bold'>Email:</span>
            {cliente.email}
          </p>
          <p className='text-2xl text-gray-500 mt-4'>
            <span className=' text-gray-800 uppercase font-bold'>Telefono:</span>
            {cliente.telefono}
          </p>
          <p className='text-2xl text-gray-500 mt-4'>
            <span className=' text-gray-800 uppercase font-bold'>Empresa:</span>
            {cliente.empresa}
          </p>
          {cliente.nota && (
            <p className='text-2xl text-gray-500 mt-4'>
              <span className=' text-gray-800 uppercase font-bold'>Notas:</span>
              {cliente.notas}
            </p>
          )}
      
    
      
    </div>
    )
  )
}

export default VerCliente
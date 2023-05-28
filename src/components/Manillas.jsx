import React,{useState, useEffect} from 'react'
import { db } from '../firebase'
import { collection, doc, addDoc, onSnapshot, deleteDoc, updateDoc  } from 'firebase/firestore'

const Manillas = () => {

  return (
    <div className='container mt-8'>
        <h1 className='text-center'>CONSULTA EL PRECIO DE TU MANILLA</h1>
        <hr></hr>

        <div className='row'>
           <div className='col-3'>
              <form action="#">
                 <h3 className='text-center'>Material</h3>
                 <select name="Material" id="lang">
                     <option value="Cuero">Cuero</option>
                     <option value="Cuerda">Cuerda</option>
                 </select>
              </form>
          </div>
 
          <div className='col-3'>
             <form action="#">
                 <h3 className='text-center'>Dije</h3>
                 <select name="Dije" id="lang">
                     <option value="Martillo">Martillo</option>
                     <option value="Ancla">Ancla</option>
                 </select>
             </form>
         </div>

          <div className='col-3'>
              <form action="#">
                 <h3 className='text-center'>Tipo</h3>
                 <select name="Tipo" id="lang">
                     <option value="Oro">Oro</option>
                     <option value="Oro Rosado">Oro Rosado</option>
                     <option value="Plata">Plata</option>
                     <option value="Niquel">Niquel</option>
                 </select>
              </form>
          </div>

         <div className='col-3'>
             <form action="#">
                 <h3 className='text-center'>Divisa</h3>
                 <select name="Divisa" id="lang">
                     <option value="Pesos">Pesos</option>
                     <option value="Dolares">Dolares</option>
                 </select>
               </form>
         </div>
     </div>
     <input type="submit" value="Consultar" className='col-2'/>
    </div>
  )
}

export default Manillas
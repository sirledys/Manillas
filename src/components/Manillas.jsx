import React,{useState, useEffect} from 'react'
import { db } from '../firebase'
import { collection, doc, addDoc, onSnapshot, deleteDoc, updateDoc  } from 'firebase/firestore'

const Manillas = () => {

  return (
   <div>
     <section>
          <div className='row'>
             <div className='col-md-12'>
                  <h1 className='text-center'>CONSULTA EL PRECIO DE TU MANILLA</h1>
              </div>
           </div>
     </section>
      <hr></hr>
      <section>
          <div className='row'>
             <div className='col-3'>
                 <img src='https://jmjoyeria.com/wp-content/uploads/2023/02/45-scaled.jpg' alt='Imagen manilla' width= '150px' height= '150px' ></img>   
             </div>
             <div className='col-3'>
                 <img src='https://http2.mlstatic.com/D_NQ_NP_786255-MCO47747530138_102021-O.jpg' alt='Imagen manilla' width= '150px' height= '150px' ></img>   
             </div>
             <div className='col-3'>
                 <img src='https://cdn.shopify.com/s/files/1/0269/9844/0009/products/image_24ab4f34-ed2f-4366-bab1-71ebfdf51b5d_460x@2x.jpg?v=1651258286' alt='Imagen manilla' width= '150px' height= '150px' ></img>   
             </div>
             <div className='col-3'>
                 <img src='https://http2.mlstatic.com/D_NQ_NP_882869-MCO54073412460_022023-O.jpg' alt='Imagen manilla' width= '150px' height= '150px' ></img>   
             </div>
         </div>
      </section>
     <section className='section2'>
          <div className='row'>
              <div className='col-2'>
                 <form action="#">
                      <h3 className='text-center'>Material</h3>
                     <select name="Material" id="lang">
                         <option value="Cuero">Cuero</option>
                         <option value="Cuerda">Cuerda</option>
                     </select>
                 </form>
              </div>
 
              <div className='col-2'>
                   <form action="#">
                     <h3 className='text-center'>Dije</h3>
                     <select name="Dije" id="lang">
                         <option value="Martillo">Martillo</option>
                         <option value="Ancla">Ancla</option>
                     </select>
                 </form>
              </div>
              <div className='col-md-2'>
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
              <div className='col-md-2'>
                 <form action="#">
                     <h3 className='text-center'>Cantidad</h3>
                     <input className='input1' type="number" id="tentacles" name="tentacles" min="1" max="99999">
                     </input>
                  </form>
              </div>
              <div className='col-2'>
                 <form action="#">
                     <h3 className='text-center'>Divisa</h3>
                     <select name="Divisa" id="lang">
                         <option value="Pesos">Pesos</option>
                         <option value="Dolares">Dólar</option>
                     </select>
                  </form>
             </div>
          </div>
      </section>
      <input type="submit" value="Consultar" className='col-1'/>
   </div>
  )

}

export default Manillas
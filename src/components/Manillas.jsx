import React,{useState, useEffect} from 'react'
import { db } from '../firebase'
import { collection, doc, addDoc, onSnapshot, deleteDoc, updateDoc  } from 'firebase/firestore'
import Swal from 'sweetalert2'

const Manillas = () => {

    async function calcular(){
            let material = document.getElementById("material").value;
            let tipo= document.getElementById("tipo").value;
            let dije= document.getElementById("dije").value;
            let cantidad= document.getElementById("cantidad").value;
            let divisa= document.getElementById("divisa").value;

            if((material=='Cuero')&&(dije=='Martillo')&&((tipo=='Oro')||(tipo=='Oro Rosado'))){
                let precio = 100*cantidad;
                precio=conversionDivisa(precio,divisa);
                Swal.fire('Gracias por consultar','El valor a pagar es: '+precio, 'success');
            }else if((material=='Cuero')&&(dije=='Martillo')&&(tipo=='Plata')){
                let precio = 80*cantidad;
                precio=conversionDivisa(precio,divisa);
                Swal.fire('Gracias por consultar','El valor a pagar es: '+precio, 'success');
            }else if((material=='Cuero')&&(dije=='Martillo')&&(tipo=='Niquel')){
                let precio = 70*cantidad;
                precio=conversionDivisa(precio,divisa);
                Swal.fire('Gracias por consultar','El valor a pagar es: '+precio, 'success');
            }else if((material=='Cuero')&&(dije=='Ancla')&&((tipo=='Oro')||(tipo=='Oro Rosado'))){
                let precio = 120*cantidad;
                precio=conversionDivisa(precio,divisa);
                Swal.fire('Gracias por consultar','El valor a pagar es: '+precio, 'success');
            }else if((material=='Cuero')&&(dije=='Ancla')&&(tipo=='Plata')){
                let precio = 100*cantidad;
                precio=conversionDivisa(precio,divisa);
                Swal.fire('Gracias por consultar','El valor a pagar es: '+precio, 'success');
            }else if((material=='Cuero')&&(dije=='Ancla')&&(tipo=='Niquel')){
                let precio = 90*cantidad;
                precio=conversionDivisa(precio,divisa);
                Swal.fire('Gracias por consultar','El valor a pagar es: '+precio, 'success');
            }else if((material=='Cuerda')&&(dije=='Martillo')&&((tipo=='Oro')||(tipo=='Oro Rosado'))){
                let precio = 90*cantidad;
                precio=conversionDivisa(precio,divisa);
                Swal.fire('Gracias por consultar','El valor a pagar es: '+precio, 'success');
            }else if((material=='Cuerda')&&(dije=='Martillo')&&(tipo=='Plata')){
                let precio = 70*cantidad;
                precio=conversionDivisa(precio,divisa);
                Swal.fire('Gracias por consultar','El valor a pagar es: '+precio, 'success');
            }else if((material=='Cuerda')&&(dije=='Martillo')&&(tipo=='Niquel')){
                let precio = 50*cantidad;
                precio=conversionDivisa(precio,divisa);
                Swal.fire('Gracias por consultar','El valor a pagar es: '+precio, 'success');
            }else if((material=='Cuerda')&&(dije=='Ancla')&&((tipo=='Oro')||(tipo=='Oro Rosado'))){
                let precio = 110*cantidad;
                precio=conversionDivisa(precio,divisa);
                Swal.fire('Gracias por consultar','El valor a pagar es: '+precio, 'success');
            }else if((material=='Cuerda')&&(dije=='Ancla')&&(tipo=='Plata')){
                let precio = 90*cantidad;
                precio=conversionDivisa(precio,divisa);
                Swal.fire('Gracias por consultar','El valor a pagar es: '+precio, 'success');
            }else if((material=='Cuerda')&&(dije=='Ancla')&&(tipo=='Niquel')){
                let precio = 80*cantidad;
                precio=conversionDivisa(precio,divisa);
                Swal.fire('Gracias por consultar','El valor a pagar es: '+precio, 'success');
            }

            try{
                const data = await addDoc(collection(db, 'consultas'),{
                    Material:material,
                    Tipo:tipo,
                    Dije:dije,
                    Cantidad:cantidad,
                    Divisa:divisa
                })
            }catch(error){
                console.error(error);
            }

    }

    function conversionDivisa(cantidad, divisa){

        if(divisa=='Pesos'){
            cantidad = cantidad*5000
        }

        return cantidad;
    }

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
          <div className='row '>

              <div className='col-2'>
                      <h3 className='text-center'>Material</h3>
                     <select name="Material" id="material">
                         <option value="Cuero">Cuero</option>
                         <option value="Cuerda">Cuerda</option>
                     </select>
              </div>
 
              <div className='col-2'>
                     <h3 className='text-center'>Dije</h3>
                     <select name="Dije" id="dije">
                         <option value="Martillo">Martillo</option>
                         <option value="Ancla">Ancla</option>
                     </select>
              </div>
              <div className='col-md-2'>
                     <h3 className='text-center'>Tipo</h3>
                     <select name="Tipo" id="tipo">
                         <option value="Oro">Oro</option>
                         <option value="Oro Rosado">Oro Rosado</option>
                         <option value="Plata">Plata</option>
                         <option value="Niquel">Niquel</option>
                     </select>
              </div>
              <div className='col-md-2'>
                     <h3 className='text-center'>Cantidad</h3>
                     <input className='input1' type="number" id="cantidad" name="tentacles" min="1" max="99999">
                     </input>
              </div>
              <div className='col-2'>
                     <h3 className='text-center'>Divisa</h3>
                     <select name="Divisa" id="divisa">
                         <option value="Pesos">Pesos</option>
                         <option value="Dolares">Dólar</option>
                     </select>
             </div>
          </div>
      </section>
      <div className="row justify-content-center ">
          <div className="col-auto">
            <button type='submit' onClick={()=>calcular()} className='btn btn-primary '>Consultar</button>
          </div>
      </div>
      
   </div>
  )

}

export default Manillas
import React, { useState } from 'react'
import List from '../pages/List'
import axios from "axios"

function Form() {
    const[visibleList, setVisibleList] = useState(false)
    const[activity, setActivity]= useState({
        product: "",
        task: "",
        name: "",
        date: "",
        time:"",
        status:null
    })
    const inputHandlerValue= (e) => {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value,
        })
    }
   const submitHandler = () => {
       axios.post("http://localhost:4000/api/newActivity", {...activity})
      .then((res)=> {
        console.log(res)
        })
        .catch((e)=> {
          console.log(e);
        })
   }
    return (
        <>
        { !visibleList &&
        <form className="form" onSubmit={()=> setVisibleList(true)}>
        <h3>Ingrese la actividad</h3>
            <div>
                <label htmlFor="product">Producto:</label>
                <input type="text" name="product" onChange={inputHandlerValue}/>
            </div>
            <div>
            <label htmlFor="task">Tipo de Tarea:</label>
            <select
            name='task'
            onChange={inputHandlerValue}
            >
            <option>Elige una opción</option>
              <option value="increase">Aumento de precio</option>
              <option value="discount">Descuento de precio</option>
              <option value="remove">Baja del producto</option>
              <option value="pause">Pausa del Producto</option>
          </select>
            </div>
          <div>
            <label htmlFor="name">Titulo de Tarea:</label>
            <input type="text" name="name" onChange={inputHandlerValue}/>
          </div>
          <div>
            <label htmlFor="date">Fecha y Hora:</label>
            <input type="date" id="start" name="date" min="2021-12-01" max="2021-12-31" onChange={inputHandlerValue}/>
            <input type="time" name="time" onChange={inputHandlerValue}/>
          </div>
          <button onClick={submitHandler}>Cargar</button>
        </form>
        }
        {
            visibleList && 
            <List/>
        }
        </>
    )
}

export default Form

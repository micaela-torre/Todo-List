import React, {useState } from 'react'
import axios from "axios"


function Button(props) {

    const{id, status,setLoading,loading}= props
    const[alert, setAlert]= useState(false)

    const deleteActivity = () => {
        setLoading(true)
        axios.delete(`http://localhost:4000/api/deleteActivity/${id}`)
        .then((res)=> {
            setAlert(!alert)
            if(res.data.success){
              setLoading(false)
            }
        })
        .catch((e)=> {
          console.log(e);
        })
        
    }
    const recycleActivity= () =>{
      setLoading(true)
      axios.put(`http://localhost:4000/api/update-status/${id}`, {status:"delete"})
        .then((res)=> {
            setAlert(!alert)
            if(res.data.success){
              setLoading(false)
            }
        })
        .catch((e)=> {
          console.log(e);
        })
        
    }
   
    return (
      <>
        {alert && 
          <div className="modal">
            <div>
                <p>Estas seguro de borrar?</p>
                <button onClick={deleteActivity}>Ahora</button>
                <button onClick={recycleActivity}>Luego</button>
            </div>   
          </div>  
        }
          <button className="buttonDelete" onClick={()=> setAlert(!alert)}>
            <img src="https://i.postimg.cc/D0GQPrKb/delete.png" width="25" alt="delete"/>
          </button>
      </>
    )
}

export default Button

import React from 'react'
import axios from "axios"

function Button({id}) {
    const deleteActivity = () => {
        axios.delete(`http://localhost:4000/api/deleteActivity/${id}`)
        .then((res)=> {
            console.log("producto eliminado")
        })
        .catch((e)=> {
          console.log(e);
        })
    }
    return (
        <button className="buttonDelete" onClick={deleteActivity}>
            <img src="https://i.postimg.cc/D0GQPrKb/delete.png" width="25" alt="delete"/>
        </button>
    )
}

export default Button

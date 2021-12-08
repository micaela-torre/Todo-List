import React, { useState } from 'react'
import List from './List'
import axios from "axios"

var today= new Date()
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10 ){
    dd = '0' + dd 
}
today = yyyy + '-' + mm + '-' + dd;

function Form() {
  const[visibleList, setVisibleList] = useState(false)
  const[activity, setActivity]= useState({
      product: "",
      task: "",
      name: "",
      date: "",
      time:"",
  })
  const inputHandlerValue= (e) => {
      setActivity({
      ...activity,  
      [e.target.name]: e.target.value,
      status: 
      activity.date === today 
      ? "in-Progress" 
      : activity.date > today 
      ? "To-do" 
      : "Done"
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
            <div>
                <label htmlFor="product">Product:</label>
                <input type="text" name="product" onChange={inputHandlerValue}/>
            </div>
            <div>
            <label htmlFor="task">Task Type:</label>
              <select name='task' onChange={inputHandlerValue}>
                <option>Choose an option</option>
                <option value="increase">Price increase</option>
                <option value="discount">Price discount</option>
                <option value="remove">Product recall</option>
                <option value="pause">Product pause</option>
              </select>
            </div>
            <div>
              <label htmlFor="name">Task title:</label>
              <input type="text" name="name" onChange={inputHandlerValue}/>
            </div>
            <div>
              <label htmlFor="date">Date and Time:</label>
                <input type="date" id="start" name="date" min="2021-12-01" max="2021-12-31" onChange={inputHandlerValue}/>
                <input type="time" name="time" onChange={inputHandlerValue}/>
            </div>
            <div>
              <button onClick={submitHandler}>Send</button>
              <button style={{background:"orange"}} onClick={()=> setVisibleList(true)}>Go to List!</button>
            </div>
          </form>
        }
        {visibleList && <List/>}
      </>
    )
}

export default Form

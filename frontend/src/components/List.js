import {React, useState, useEffect} from 'react'
import axios from "axios"
import Button from './Button'
import Loading from './Loading'

function List() {

const[activities, setActivities] = useState([])
const[loading, setLoading] = useState(true)
let toDo;
let inProgress;
let done;
let deleteActivity

useEffect(() => {
    axios.get('http://localhost:4000/api/getActivities')
    .then((res)=> {
    setActivities(res.data.response)
    setLoading(false)
    })
    .catch((e)=> {
    console.log(e);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [loading])
    
const showActivities =(Array,status)=>{
    Array = activities.filter(activity => activity.status === status)
    Array = Array.map((act, index)=>
     <div className="activity" key={`activity-${index}`}>
        <h3>{act.product}</h3>
        <p>{act.name}</p>
        <p>Type:{act.task}</p>
        <p>Date:{act.date}</p>
        <Button id={act._id} status={act.status} loading={loading} setLoading={setLoading}/>
     </div>)
    return Array
}

    return (
        <div className="boxContainer">
            {loading 
                ? <Loading/>
                : ( 
                    <>
                        <div className="divContainer">
                            <div className="containerActivity">
                                <div className="toDo">
                                    <h2 className="columnTitle">To-Do</h2>
                                </div>
                                <div className="activitiesDiv">
                                    {showActivities(toDo, "To-do")}
                                </div>   
                            </div>
                            <div className="containerActivity">
                                <div className="progress">
                                    <h2 className="columnTitle">in-Progress</h2>
                                </div>
                                <div className="activitiesDiv">
                                    {showActivities(inProgress, "in-Progress")}
                                </div>
                            </div>
                            <div className="containerActivity">
                                <div className="done">
                                    <h2 className="columnTitle">Done</h2>
                                </div>
                                <div className="activitiesDiv">
                                    {showActivities(done, "Done")}
                                </div>
                            </div>
                        </div>
                        <div className="divContainerDelete">
                            <div style={{background:"#E3512B"}}>
                                <h2 className="columnTitle">DELETE</h2>
                            </div>
                            <div className="activitiesDiv">
                                {showActivities(deleteActivity, "delete")}
                            </div>
                        </div> 
                    </>
                )
            } 
        </div>
    )
}

export default List

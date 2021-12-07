import {React, useState, useEffect} from 'react'
import axios from "axios"
import Button from '../components/Button'

function List() {
    const[activities, setActivities] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/api/getActivities')
        .then((res)=> {
        setActivities(res.data.response)
        })
        .catch((e)=> {
          console.log(e);
        })
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  
    

    return (
        <div className="boxContainer">
            <div className="divContainer">
                <div style={{width: "30%", minHeight:"25vh"}}>
                    <div style={{background:"#DAA236"}}>
                        <h2 className="columnTitle">TO-DO</h2>
                    </div>
                        {activities.map((activity,index)=>
                    <div key={`activity-${index}`} style={{border:"1px solid", width:"100%", minHeight:"15vh", padding:"0.5rem"}}>
                        <div>
                            <h3>{activity.product}</h3>
                            <p>Type:{activity.task}</p>
                            <p>Date:{activity.date}</p>
                            <Button id={activity._id}/>
                        </div>
                    </div>)}
                </div>
                <div style={{width: "30%", minHeight:"25vh"}}>
                    <div style={{background:"#009FC8"}}>
                        <h2 className="columnTitle">IN-PROGRESS</h2>
                    </div>
                </div>
                <div style={{width: "30%", minHeight:"25vh"}}>
                    <div style={{background:"#00CF53"}}>
                        <h2 className="columnTitle">DONE</h2>
                    </div>
                </div>   
            </div>
            <div className="divContainerDelete">
                <div style={{background:"#E3512B"}}>
                    <h2 className="columnTitle">DELETE</h2>
                </div>
            </div>
        </div>
    )
}

export default List

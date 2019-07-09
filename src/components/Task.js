import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Task.css';

const Task = (props) => {

    const style = {
        color: 'red',
        fontWeight: 'bold',
        }

    const closeButtonStyle = {
        paddingLeft: "12px",
        paddingRight: "12px",
        }    

    const { text, id, active, important } = props.task;

    if (active) {    
        return ( 
            <>
                <div className="element">
                    <button className="complete" onClick={() => props.change(id)}>Complete</button>
                    <p style={important ? style : null}>{text}</p>
                    <button className="btn btn-light" onClick={() => props.delete(id)}>X</button>
                </div>
                <div className="break"></div>
            </>
        );
        } else {
            
            return (
                <>
                    <div className="element">
                        <div className="bg-light">Completed</div>
                        <p>{text}</p>
                        <div className="bg-light" style={closeButtonStyle} onClick={() => props.delete(id)}>X</div>
                    </div>
                    <div className="break"></div>
                </>
            )
        }
    }
 
export default Task;
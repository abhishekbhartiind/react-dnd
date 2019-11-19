import React from 'react'
import Draggable from './Draggable'

const taskStyle = {
    backgroundColor: "DeepSkyBlue",
    margin: 0,
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "blue"
}

const Task = (props) =>  {
    return (
        <Draggable {...props}> 
            <p style={taskStyle}>{props.title}</p>
        </Draggable>
    )
}

export default Task
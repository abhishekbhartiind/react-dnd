import React from 'react'
import Task from './Task'
import Card from './Card'
import Droppable from './Droppable'

const TaskList = props => {
    const { tasks = [], id} = props
    return (
        <Card>
            <Droppable dndType="TASK" {...props}>
                <h2>{id}</h2>
                {
                    tasks.map(task => (
                        <Task key={task.id} dndType="TASK" {...task}/>
                    ))
                }
            </Droppable>
        </Card>
    )
}

export default TaskList
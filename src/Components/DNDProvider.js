import React from 'react'
import {DndProvider} from 'react-dnd'
import HTML5Backend from "react-dnd-html5-backend";

const DNDProvider = (props) => {
    return (
        <DndProvider backend={HTML5Backend}>
            {props.children}
        </DndProvider>
    )
}

export default DNDProvider
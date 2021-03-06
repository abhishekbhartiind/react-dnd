import React from 'react'
import { DragSource } from 'react-dnd'

const itemSource = {
  // When the dragging starts, beginDrag is called.
  // Return a plain JavaScript object that will be available to the drop target

  beginDrag(props){
    return {
        item: props
    }
  }
}

const collect = (connect) => {
    return {
        connectDragSource: connect.dragSource()
    }
}

const Item = (props) => {
    const {connectDragSource, children} = props
    return connectDragSource(
        <div>
            {children}
        </div>
    )
}

export default DragSource(props => props.dndType, itemSource, collect)(Item)
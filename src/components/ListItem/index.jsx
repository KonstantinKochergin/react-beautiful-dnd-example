import React from 'react'
import './style.css'

const ListItem = ({text, refProp, draggableProps, dragHandleProps}) => {

    return (
        <li className="list-item" ref={refProp} {...draggableProps} {...dragHandleProps}>
            {text}
        </li>
    )
}

export default ListItem
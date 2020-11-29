import React, { useState } from 'react'
import ListItem from '../ListItem'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const DndList = ({items}) => {

    const [listItems, updateListItems] = useState(items)

    const renderItems = listItems.map(({id, text}, index) => (
        <Draggable key={id} draggableId={'' + id} index={index}>
            {(provided) => (
                <ListItem text={text} draggableProps={provided.draggableProps} dragHandleProps={provided.dragHandleProps} refProp={provided.innerRef}/>
            )}
        </Draggable>
    ))

    function handleDragEnd(result) {
        if (!result.destination) return
        const items = Array.from(listItems)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        updateListItems(items)
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="cases">
                {(provided) => (
                    <ul className="list" {...provided.droppableProps} ref={provided.innerRef}>
                        {renderItems}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default DndList
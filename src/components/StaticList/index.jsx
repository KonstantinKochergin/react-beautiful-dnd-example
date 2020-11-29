import React from 'react'
import ListItem from '../ListItem'

const StaticList = ({items}) => {

    const renderItems = items.map(({id, text}) => (
        <ListItem text={text} key={id}/>
    ))

    return (
        <ul className="list">
            {renderItems}
        </ul>
    )
}

export default StaticList
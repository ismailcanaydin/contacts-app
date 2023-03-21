import React from 'react'

function Item({ item }) {
    return (
        <div>
            {item.name} - {item.phoneNumber}
        </div>
    )
}

export default Item
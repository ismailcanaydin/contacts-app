import React from 'react'
import { useSelector } from 'react-redux'
import { contactSelectors } from '../../redux/contactSlice'
import Item from './Item'

function List() {
    const contacts = useSelector(contactSelectors.selectAll)

  return (
    <div>
        {
            contacts.map(contacts => (<Item key={contacts.id} item={contacts} />))
        }
    </div>
  )
}

export default List
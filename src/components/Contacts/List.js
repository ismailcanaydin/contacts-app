import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactSelectors, removeAllContacts } from '../../redux/contactSlice'
import Item from './Item'

function List() {
  const dispatch = useDispatch()

  const handleRemoveAll = () => {
    if (window.confirm('Are you sure?')) {
      dispatch(removeAllContacts())
    }
  }

  const contacts = useSelector(contactSelectors.selectAll)
  const total = useSelector(contactSelectors.selectTotal)

  return (
    <div>
      {
        total > 1 &&

        <div className='deleteAllBtn' onClick={handleRemoveAll}>Delete All</div>
      }
      <ul className='list'>
        {
          contacts.map(contacts => (<Item key={contacts.id} item={contacts} />))
        }
      </ul>
    </div>
  )
}

export default List
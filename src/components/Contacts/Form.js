import '../../App.css';

import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, addContacts } from '../../redux/contactSlice'

function Form() {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !phoneNumber) return false

    // const names = name.split(',')
    // const data = names.map((name) => ({ id: nanoid(), name }))
    dispatch(addContact({ id: nanoid(), name, phoneNumber }))

    setName('')
    setPhoneNumber('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder='phone number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <div className='btn'>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Form
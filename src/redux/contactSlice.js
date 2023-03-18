import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter()
const initialState = contactAdaptor.getInitialState()

export const contactSlice = createSlice({
    name: 'contacts',
    reducers: {
        addContact: contactAdaptor.addOne,
        addContacts: contactAdaptor.addMany,
    },
    initialState,
})

export const { addContact, addContacts } = contactSlice.actions
export default contactSlice.reducer
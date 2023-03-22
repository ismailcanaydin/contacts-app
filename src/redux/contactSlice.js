import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter()
const initialState = contactAdaptor.getInitialState()

export const contactSelectors = contactAdaptor.getSelectors((state) => state.contacts)

export const contactSlice = createSlice({
    name: 'contacts',
    reducers: {
        addContact: contactAdaptor.addOne,
        addContacts: contactAdaptor.addMany,
        deleteContact: contactAdaptor.removeOne,
        removeAllContacts: contactAdaptor.removeAll,
        updateContact: contactAdaptor.updateOne,
    },
    initialState,
})

export const { addContact, addContacts, deleteContact, removeAllContacts, updateContact } = contactSlice.actions
export default contactSlice.reducer
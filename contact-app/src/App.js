import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';
import AddContactList from './components/AddContactList'
import ContactList from './components/ContactList'
import Header from './components/Header'



function App() {


  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contacts }]);
  }
  useEffect(() => {
    const retrieveDaat = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
    if (retrieveDaat) setContacts(retrieveDaat)
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  return (
    <div>
      <React.Fragment>

       
          <Header />
     
        <Routes>
          <Route path="/" exact element={<ContactList contacts={contacts} />} />
          <Route path="/add" element={<AddContactList addContactHandler={addContactHandler} />} />


        </Routes>

      </React.Fragment>


      {/* 
      <Header />
      <AddContactList addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} /> */}

    </div>
  )
}

export default App
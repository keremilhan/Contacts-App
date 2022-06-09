import { useState, useEffect } from 'react'

import './styles.css'

import List from './List'
import Form from './Form'


function Contacts() {

  const [contacts, setContacts] = useState([{
    fullname: "Mehmet",
    phone_number: "123123"
  },
  {
    fullname: "Ayşe",
    phone_number: "43457"
  },
  {
    fullname: "Fatma",
    phone_number: "12245225"
  }
  ]);

  useEffect(()=>{
    console.log(contacts);
  }, [contacts])
  
  return (
    <div id='container'>
        <h1 id='heading'>CONTACTS</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;
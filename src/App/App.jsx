import { useState } from 'react'
import initialList from '../../contacts.json'


import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import './App.css'

export default function App() {
   const [list, setList] = useState(initialList);
  
  const addContact = (newContact) => {
    setList((prevContact) => {
      return [...prevContact, newContact];
    });
  };
  
  const deleteContact = (contactId) => {
    setList((prevContacts) => {
      return prevContacts.filter((item) => item.id !== contactId);
    });
  };
  
  return (<div>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact} />
  <SearchBox />
  <ContactList list={list} onDelete={deleteContact} />
</div>
)
}




 



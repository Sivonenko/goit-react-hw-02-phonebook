import { Component } from 'react'

import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Filter from './Filter'


export default class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},

    ],
    filter: ''
  }
  handleAddContact = (newContact) => this.setState(({ contacts }) => ({
    contacts: [...contacts, newContact],
  }))

  handleCheckUContact = (name) => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find((contacts) => contacts.name === name)

    isExistContact && alert('Contact is already exist')
    return !isExistContact

  }

  handleRemoveContact = (id) => 
    this.setState(({contacts}) => ({contacts: contacts.filter((contact) => contact.id !== id)}))

  handleFilterChange = (filter) => this.setState({ filter })
  
  getVisibleContacts = () => {
    const { contacts, filter } = this.state
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }


  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts()
    return <>
      <h2>Form contact</h2>
      <ContactForm onAdd={this.handleAddContact} onCheckContact={this.handleCheckUContact} />
      <h2>Contacts List</h2>
      <Filter filter={filter} onChange={this.handleFilterChange}/>
      <ContactList contacts={visibleContacts} onRemove={this.handleRemoveContact}/>
    </>
  }
}
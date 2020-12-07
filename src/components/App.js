import { Component } from 'react'

import ContactForm from './ContactForm'

export default class App extends Component {
  state = {
    contact: [],
  }
  handleAddContact = (newContact) => this.setState(({ contact }) => ({
    contact: [...contact, newContact],
  }))

  handleCheckUContact = (name) => {
    const { contact } = this.state;
    const isExistContact = !!contact.find((contact) => contact.name === name)

    isExistContact && alert('Contact is already exist')
    return !isExistContact

  }
  render() {
    return <>
      <h2>Form Contact</h2>
      <ContactForm onAdd={this.handleAddContact}/>
    </>
  }
}
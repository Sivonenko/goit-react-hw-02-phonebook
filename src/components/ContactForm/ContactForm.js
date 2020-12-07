import { Component } from 'react'
import { v4 as uuid } from 'uuid';
import s from '/ContactForm.module.css'

const initalState = {
    name: '',
    phone: '',
}

class ContactForm extends Component {
    state = initalState

    handleChacheForm = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        const { name, phone } = this.state;
        const { onAdd } = this.props;
        const isvalidateForm = this.validateForm()

        if (!isvalidateForm) return

        onAdd({ id: uuid(), name, phone })
        this.resetForm()
    }

    validateForm = () => {
        const { name, phone } = this.state;
        const { onCheckContact } = this.props;
        if (!name || !phone) {
            alert('Some filed is enpty')
            return false
        }
        return onCheckContact(name)
    }

    resetForm = () => this.setState(initalState)

    render() {
        const { name, phone } = this.state
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type='text' name='name' placeholder='Enter name' value={name} onChange={this.handleChacheForm}/>
                <input type='tel'
                    name='phone'
                    placeholder='Enter phone number'
                    value={phone}
                    onChange={this.handleChacheForm} />
                <button type='submit'>Add Contact</button>
            </form>
        )
    }
}

export default ContactForm
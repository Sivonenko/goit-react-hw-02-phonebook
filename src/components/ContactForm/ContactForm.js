import { Component } from 'react'
import { v4 as uuid } from 'uuid';
// import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const initalState = {
    name: '',
    number: '',
    
}

class ContactForm extends Component {
    state = initalState

    handleChacheForm = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        const { name, number } = this.state;
        const { onAdd } = this.props;
        const isvalidateForm = this.validateForm()

        if (!isvalidateForm) return

        onAdd({ id: uuid(), name, number })
        this.resetForm()
    }

    validateForm = () => {
        const { name, number } = this.state;
        const { onCheckContact } = this.props;
        if (!name || !number) {
            alert('Some filed is enpty')
            return false
        }
        return onCheckContact(name)
    }

    resetForm = () => this.setState(initalState)

    render() {
        const { name, number } = this.state
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type='text'
                    name='name'
                    placeholder='Enter name'
                    required
                    value={name}
                    onChange={this.handleChacheForm} />
                
                <input type='tel'
                    name={'number'}
                    placeholder='Enter number'
                    value={number}
                    onChange={this.handleChacheForm}
                    required
                />

                <button className={s.contactBtn} type='submit'>Add Contact</button>
            </form>
        )
    }
}

export default ContactForm
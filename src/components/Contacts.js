import React, { Component } from 'react';
import Contact from './Contact';

 class Contacts extends Component {
  state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Karen Williams',
                email: 'kwilliams@gmail.com',
                phone: '111-111-1111'
            },
            {
                id: 3,
                name: 'Henry Johnson',
                email: 'henry@gmail.com',
                phone: '225-555-8888'
            }
        ]
    }

    deleteContact = (id) => {
        const { contacts } = this.state;
        // you have to filter the data now
        const newContacts = contacts.filter(contact => contact.id !== id);
        // this is a copy of the state without the one we deleted
        this.setState({
            contacts: newContacts
        })
    }
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
            <Contact 
                key={contact.id}
                // you could pass in contact.name, contact.phone, etc
                // but you don't have to - you can do it this way
                contact={contact} 
                // you have to add this from contact.js so that component has access to the state
                deleteClickHandler={this.deleteContact.bind(this, contact.id)}
            />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
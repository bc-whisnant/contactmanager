import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
    state = {
        // this is going to make the information collapsed on page load
        showContactInfo: false
    };

    // this keyword is available because of using arrow function
    onShowClick = () => {
        // sets state to opposite of its current value on click
        this.setState({ showContactInfo: !this.state.showContactInfo });
    }

    //handle deleting a contact --> this will propagate to the parent
    onDeleteClick = () => {
        // this has to be added to properties in contacts.js
        this.props.deleteClickHandler();
    }

    render() {
        //destructuring
        const {name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state; 


        return (
            <div className="card card-body mb-3">
                <h4>
                    {name} 
                    <i onClick={this.onShowClick} className="fas fa-sort-down" style={{cursor: 'pointer'}} />
                    <i className="fas fa-times"
                       style={{cursor: 'pointer', float: 'right', color: 'red'}} 
                       onClick={this.onDeleteClick}
                       
                    />
                </h4>
                {showContactInfo ? (<ul className="list-group">
                    <li className="list-group-item">Email: {email}</li> 
                    <li className="list-group-item">Phone: {phone}</li> 
                </ul>) : null}
                
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired

}

export default Contact;
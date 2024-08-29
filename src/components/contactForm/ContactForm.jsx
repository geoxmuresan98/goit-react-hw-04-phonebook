import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './ContactForm.css';

function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className="submit-form" onSubmit={handleSubmit}>
        <div className="flex mb-2">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className="flex mb-2">
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <div className="flex mb-2">
          <button className="btn btn-submit">Add Contact</button>
        </div>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
};

export default ContactForm;

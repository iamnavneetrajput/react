import React, { useState } from 'react';
import './page.css';

const ContactForm = () => {
  // State to manage form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'course',
    other: '',
    message: '',
  });

  // State for the response message
  const [responseMessage, setResponseMessage] = useState('');

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for form submission here
    // You can use the formData state to get the form values
    // For example, console.log(formData);

    // Set a response message (for demonstration purposes)
    setResponseMessage('Form submitted successfully!');
  };

  // Event handler for reason selection
  const handleReasonChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      reason: value,
    }));

    // Show/hide "other" reason input based on the selected reason
    if (value === 'other') {
      document.getElementById('otherReason').style.display = 'block';
    } else {
      document.getElementById('otherReason').style.display = 'none';
    }
  };

  // Event handler for input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='main'> 
    <div className="form">
      <form id="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        /><br />

        <label htmlFor="reason">Reason:</label>
        <select
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleReasonChange}
          required
        >
          <option value="course">Course Problem</option>
          <option value="website">Website Problem</option>
          <option value="account">Account Problem</option>
          <option value="other">Other</option>
        </select><br />

        <div id="otherReason" style={{ display: formData.reason === 'other' ? 'block' : 'none' }}>
          <label htmlFor="other">Specify Other Reason:</label>
          <input
            type="text"
            id="other"
            name="other"
            value={formData.other}
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea><br />

        <input type="submit" value="Submit" />
        <div className="form" id="response">
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;

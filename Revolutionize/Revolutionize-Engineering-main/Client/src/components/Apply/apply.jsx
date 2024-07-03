import React, { useState } from 'react';
import './Apply.css'; // Import CSS file for styling
import backgroundImage from '../../assets/apply.jpeg';

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, cv: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
  };

  return (
    <div className="apply-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="apply-form-container">
        <h2><u>APPLY NOW</u></h2>
        <form onSubmit={handleSubmit} className="apply-form">
          <div className="form-group">
            <label htmlFor="firstName" blocktext-sm>First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
          </div>
          <div className="form-group last-name">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <label htmlFor="cv">CV:</label>
            <input type="file" id="cv" name="cv" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Apply;
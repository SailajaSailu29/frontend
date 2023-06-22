import { Padding } from '@mui/icons-material';
import React, { useState } from 'react';

const AddressForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields
    if (!name || !address || !city || !state) {
      setError('Please fill in all the fields');
      return;
    }

    // Process the address data or send it to your backend for further processing

    setIsSubmitted(true);
  };

  return (
    <center>
    <center style={{padding:100}}>
      <h1>Payment Process</h1><br/><br/><br/><br/>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Full Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br/><br/>
        </label>
      </div>
      <div>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          /><br/><br/>
        </label>
      </div>
      <div>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          /><br/><br/>
        </label>
      </div>
      <div>
        <label>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          /><br/><br/>
        </label>
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Submit</button>
      {isSubmitted && <div>Address submitted successfully!</div>}
    </form>
    </center>
    </center>
  );
};

export default AddressForm;
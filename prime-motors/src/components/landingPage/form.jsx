import React from 'react';

function Form() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',  // Align children vertically
        justifyContent: 'center',  // Center vertically
        alignItems: 'center',  // Center horizontally
        height: '80vh',
        background: '#111827',
      }}
    >
      <div
        style={{
          width: '400px',
          textAlign: 'center',
        }}
      >
        <h1 className='text-white text-center'>Contact Us</h1>
        <input
          type='text'
          placeholder='First Name'
          className='form-input'
          style={{
            width: '100%',
            height: '40px',
            padding: '8px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        />
        <input
          type='text'
          placeholder='Email'
          className='form-input'
          style={{
            width: '100%',
            height: '40px',
            padding: '8px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        />
        <input
          type='text'
          placeholder='Your Message'
          className='form-input'
          style={{
            width: '100%',
            height: '80px',
            padding: '8px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        />
        <button className='btn btn-outline-info'>Submit</button>
      </div>
      <div
        style={{
          width: '400px',  // Match the width of the "Contact Us" form
          marginTop: '30px',
          textAlign: 'center',
        }}
      >
        <h1 className='text-white'>Create a Custom Package</h1>
        <p className='text-white'>
          Didn't find what you need? Don't fret. We are always open for tweaks and suggestions.
        </p>
        <button className='btn btn-outline-info'>Start Now</button>
      </div>
    </div>
  );
}

export default Form;


import React from 'react';

function Form() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        background: '#111827',
      }}
    >
      <div
        style={{
          width: '400px',
          textAlign: 'center',
          padding: '35px'
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
        <div style={{
          marginTop: '20px'
        }}>
        <button className='btn btn-outline-info'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Form;


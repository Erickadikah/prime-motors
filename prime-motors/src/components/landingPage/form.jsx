import React from 'react';
// import '../../assets/styles/Form.scss'; // Import the SCSS file

function Form() {
  return (
    <div
  style={{
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    height: '80vh',    
    background: '#014451'
  }}
>
  <div
    style={{
      width: '400px',
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
    <button className="btn btn-outline-info">Submit</button>
  </div>
</div>

  );
}

export default Form;


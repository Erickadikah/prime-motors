import React, { useState } from "react";
// import postData from "../../controllers/postData";

function Form() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    message: "",
  });

  const [apiResponseMessage, setApiResponseMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section id="contactUs bg-white">
      <h1 className="text-center text-white">Get In Touch</h1>
    {/*9  {apiResponseMessage && (*/}
        <div
          className="bg-primary text-white"
          style={{
            position: "fixed",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "400px",
            padding: "10px",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        >
          {/*({apiResponseMessage}*/}
        </div>
        { /* )}*/}

      <div className="form-container container bg-white" id="auth-form">
        <form role="form" >
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            id="name"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="email"
            id="email"
            name="customerEmail"
            value={formData.customerEmail}
            onChange={handleInputChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows={10}
            placeholder="Enter your message here"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
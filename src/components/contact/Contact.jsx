import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

// d924a213-7549-4c6d-b7bb-1f6d3c7f868b
const Contact = () => {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d924a213-7549-4c6d-b7bb-1f6d3c7f868b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. 
                Your feedback, questions, and suggestions are important to us as we strive
                 to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail_icon} alt="" />contact@gmail.com</li>
                <li><img src={phone_icon} alt="" />1234567890</li>
                <li><img src={location_icon} alt="" />123 , ranjhi , jabalpur</li>

            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='enter your name' required/>
                <label>Phone number</label>
                <input type='tel' name='phone' placeholder='enter your mobile number' required/>
                <label>Email id</label>
                <input type='email id' name='phone' placeholder='enter your email address' required/>
                <label>Write your message here</label>
                <textarea name='message' rows={6} placeholder='enter your text' required/>
                <button type='submit' className='btn dark-btn'>Submit now 
                    <img src={white_arrow} alt="" /></button>

            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
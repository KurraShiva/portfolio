import React from 'react'
import Header from '../components/Header'
import emailjs from '@emailjs/browser'

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_8bjvhfl',    // replace with actual service ID
        'template_78mh47o',   // replace with actual template ID
        e.target,
        'TRe12jG7QrAqe2POK'     // replace with actual public key
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text)
          alert('Message Sent Successfully!')
          e.target.reset()
        },
        (error) => {
          console.log('Email sending failed:', error.text)
          alert('Failed to send message. Please try again.')
        }
      )
  }

  return (
    <div>
      <Header />
      <div className="container contact mt-5">
        <div className="row pt-5">
          <div className="col-md-6 p-5">
            <img src="./contactme.svg" alt="contact-us" />
          </div>

          <div className="col-md-6">
            <form className="contact-form m-2 p-5 n-box2" onSubmit={sendEmail}>
              <h3 className="font-bold">Contact Me</h3>
              <hr />
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required
              />
              <textarea
                className="form-control"
                name="message"
                rows={3}
                placeholder="Description"
                required
              ></textarea>

              <button className="primary-button mt-3" type="submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

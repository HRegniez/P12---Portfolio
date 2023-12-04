import React, { useState } from 'react'
import axios from 'axios'
import '../styles/components/contactForm.sass'

export const ContactForm = () => {
  const [name, setName]= useState('')
  const [email, setEmail]= useState('')
  const [message, setMessage]= useState('')

  const sendEmail = async (e) => {
    e.preventDefault()

    const data = {
      service_id: 'service_tczqxle',
      template_id: 'contact_form',
      user_id: 'ZccqbXOP5Mcp63maJ',
      template_params: {
        from_name: name,
        from_mail: email,
        message: message
      }
    }

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data)
      console.log(res.data)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className='contact_form' onSubmit={sendEmail}>
      <h3>Contact me</h3>
      <ul>
        <li>
          <input 
            type="text"
            value={name} 
            placeholder='Your name' 
            onChange={(e) => setName(e.target.value)}
            required
          />
        </li>
        <li>
          <input 
            type="email"
            value={email} 
            placeholder='Email' 
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </li>
        <li>
          <textarea 
            placeholder='Message' 
            value={message}
            cols="22" 
            rows="5" 
            onChange={(e) => setMessage(e.target.value)}
            required
          >
          </textarea>
        </li>
        <li>
          <input 
            type="submit" 
            value="Send" />
        </li>
      </ul>

    </form>
  )
}
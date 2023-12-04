import React from 'react'
import '../styles/components/footer.sass'
import { ContactForm } from './ContactForm'

const Footer = () => {
  return (
    <footer className='footer'>
      <section>
        <ContactForm/>
        <p>GitHub: https://github.com/HRegniez</p>
      </section>
      <section>
        <h3>About this site</h3>
        <p>
          This site was designed and hand-coded by myself using REACT.
        </p>
        <p>
          Here is the code: https://github.com/HRegniez/P12---Portfolio
        </p>
      </section>
    </footer>
  )
}

export default Footer

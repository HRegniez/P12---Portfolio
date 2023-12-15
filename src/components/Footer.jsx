import React from 'react'
import '../styles/components/footer.sass'
import { ContactForm } from './ContactForm'

const Footer = () => {
  return (
    <footer className='footer'>
      <section>
        <ContactForm/>
        
      </section>
      <section>
        <h3>About this site</h3>
        <article>
          <p>
            This site was designed and hand-coded by myself using REACT.
          </p>
          <p>
            Here is the code: https://github.com/HRegniez/P12---Portfolio
          </p>
        </article>
        
        <a className='footer_github' target='_blanc' href='https://github.com/HRegniez'><i className="fa-brands fa-github"></i>   GitHub </a>
      </section>
    </footer>
  )
}

export default Footer

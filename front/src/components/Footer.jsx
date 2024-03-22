import React from 'react'
import '../styles/components/footer.sass'
import { ContactForm } from './ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
          <a target='_blanc' href='https://github.com/HRegniez/P12---Portfolio/tree/master/front'>
            Link to code
          </a>
        </article>
        
        <a className='footer_github' target='_blanc' href='https://github.com/HRegniez'>
          <FontAwesomeIcon icon={faGithub} className='footer_github-icon'/> 
           GitHub
        </a>
      </section>
    </footer>
  )
}

export default Footer

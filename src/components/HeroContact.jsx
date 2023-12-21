import React, { useState, useEffect} from 'react'
import { ContactForm } from './ContactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const HeroContact = () => {
    const [contact, setContact] = useState(false)

    const changeState = () => {
        setContact((closed) => !closed)
    }

    useEffect(() => {
        const clickOutside = (event) => {
            if(!event.target.closest('.hero_contact')) {
                setContact((opened) => !opened)
            }
        }

        if(contact) {
            document.addEventListener('click', clickOutside)
        }else {
            document.removeEventListener('click', clickOutside)
        }

        return () => {
            document.removeEventListener('click', clickOutside)
        }
    }, [contact])

  return (
    <aside className='hero_contact'>
        {
            contact ? (
                <div className='hero_contact-open'>
                    <ContactForm/>                    
                </div>
            ) : (
                <div className='hero_contact-btn' onMouseUp={() => changeState()}>
                    <p>Contact</p>
                    <FontAwesomeIcon icon={faEnvelope} className='hero_contact-icon'/>             
                </div>

            )
        }

    </aside>
  )
}

export default HeroContact

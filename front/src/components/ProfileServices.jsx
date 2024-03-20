import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDisplay, faChartLine, faWrench } from '@fortawesome/free-solid-svg-icons'

function ProfileServices() {
  return (
    <article className='profile_services'>
        <h3>What I do</h3>
        <ul>
            <li>
                <FontAwesomeIcon icon={faCode} className='profile_services-icon'/>
                <h4>Web Developpement</h4>
                <p>
                Customized application tailored to the client's needs.
                </p>
            </li>
            <li>
                <FontAwesomeIcon icon={faDisplay} className='profile_services-icon'/>
                <h4>Multi-platform</h4>
                <p>
                compatible with all devices, desktop, mobile, and tablets.
                </p>
            </li>
            <li>
                <FontAwesomeIcon icon={faChartLine} className='profile_services-icon'/>
                <h4>SEO</h4>
                <p>
                Elevating online visibility through code optimization and strategic enhancements.
                </p>
            </li>
            <li>
                <FontAwesomeIcon icon={faWrench} className='profile_services-icon'/>
                <h4>Web Maintenance</h4>
                <p>
                Ensuring seamless operation and continuous code optimization.
                </p>
            </li>
        </ul>
    </article>
  )
}

export default ProfileServices

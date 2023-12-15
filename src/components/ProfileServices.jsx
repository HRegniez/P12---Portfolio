import React from 'react'

function ProfileServices() {
  return (
    <article className='profile_services'>
        <h3>What I do</h3>
        <ul>
            <li>
                <i className="fa-solid fa-code"></i>
                <h4>Web Developpement</h4>
                <p>
                Customized application tailored to the client's needs.
                </p>
            </li>
            <li>
                <i className="fa-solid fa-display"></i>
                <h4>Multi-platform</h4>
                <p>
                compatible with all devices, desktop, mobile, and tablets.
                </p>
            </li>
            <li>
                <i className="fa-solid fa-chart-line"></i>
                <h4>SEO</h4>
                <p>
                Elevating online visibility through code optimization and strategic enhancements.
                </p>
            </li>
            <li>
                <i className="fa-solid fa-wrench"></i>
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

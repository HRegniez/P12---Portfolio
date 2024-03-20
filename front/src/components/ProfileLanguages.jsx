import React from 'react'

import iconHtml from "../assets/languageLogos/icons8-html-5.svg"
import iconCss from "../assets/languageLogos/icons8-css3.svg"
import iconJs from "../assets/languageLogos/icons8-javascript.svg"
import iconReact from "../assets/languageLogos/icons8-réagir.svg"

function ProfileLanguages() {
  return (
    <article className='profile_languages'>
        <h3>Languages I use</h3>
        <ul>
          <li>
            <div className='profile_languages-icon'>
              <img src={iconHtml} alt="HTML icon" />
            </div>
            <h4>
              HTML
            </h4>
          </li>
          <li>
            <div className='profile_languages-icon'>
              <img src={iconCss} alt="CSS icon" />
            </div>
            <h4>
              CSS
            </h4>
          </li>
          <li>
            <div className='profile_languages-icon'>
              <img src={iconJs} alt="JS icon" />
            </div>
            <h4>
              JS
            </h4>
          </li>
          <li>
            <div className='profile_languages-icon'>
              <img src={iconReact} alt="React icon" />
            </div>
            <h4>
              REACT
            </h4>
          </li>
        </ul>
    </article>
  )
}

export default ProfileLanguages

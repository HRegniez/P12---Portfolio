import React from 'react'
import '../styles/pages/experience.sass' 

import iconHtml from "../assets/languageLogos/icons8-html-5.svg"
import iconCss from "../assets/languageLogos/icons8-css3.svg"
import iconJs from "../assets/languageLogos/icons8-javascript.svg"
import iconReact from "../assets/languageLogos/icons8-réagir.svg"

import iconVite from "../assets/languageLogos/icons8-vite.svg"
import iconWebpack from '../assets/languageLogos/js_webpack-icon.svg'
import iconSass from "../assets/languageLogos/icons8-avatar-sass.svg"
import iconTailwind from '../assets/languageLogos/Tailwind_CSS_Logo.svg'
import iconRedux from "../assets/languageLogos/redux.svg"
import iconGit from '../assets/languageLogos/git-icon.svg'
import iconGithub from "../assets/languageLogos/github-icon-1.svg"
import iconSwagger from '../assets/languageLogos/swagger-seeklogo.com.svg'
import iconThree from '../assets/languageLogos/THREEjs.svg'

const Experience = () => {

  return (
    <section id='profile' className='profile_wrapper'>
      <div className='profile'>
        <h2 className='profile_title'>Profile</h2>

        <article className='profile_bio'>
          <h3>Bio</h3>
          
          <aside className='profile_bio-in' >
            <p>
              Bonjour! <br/> I'm <strong>Henri</strong>, a <strong>franco-british</strong> passionate <strong>Front-End Developer</strong> 
            </p>
          </aside>
          <aside className='profile_bio-out'>
            <p>
              Passionate about logical challenges, seeking innovative projects to contribute skills.
            </p>
          </aside>         
          
         
        </article>
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

        <div className='flex-desktop'>
          <article className='profile_languages'>
            <h3>Languages I use</h3>
            <ul>
              <li>
                <div className='profile_languages-icon'>
                  <img src={iconHtml} alt="" />
                </div>
                <h4>
                  HTML
                </h4>
              </li>
              <li>
                <div className='profile_languages-icon'>
                  <img src={iconCss} alt="" />
                </div>
                <h4>
                  CSS
                </h4>
              </li>
              <li>
                <div className='profile_languages-icon'>
                  <img src={iconJs} alt="" />
                </div>
                <h4>
                  JS
                </h4>
              </li>
              <li>
                <div className='profile_languages-icon'>
                  <img src={iconReact} alt="" />
                </div>
                <h4>
                  REACT
                </h4>
              </li>
            </ul>
          </article>

          <article className='profile_background'>
            <h3>Background</h3>
            <ul>
              <li>
                <span>2013</span>
                <h4>A-level (équivalent du BAC-S français)</h4>
                <p>St Julians School - Newport, UK</p>
              </li>
              <li>
                <span>2021 - 2022</span>
                <h4>Initiation au metier de developpeur web</h4>
                <p>OpenClassrooms</p>
              </li>
              <li>
                <span>2023</span>
                <h4>Formation Intégrateur Web</h4>
                <p>OpenClassrooms</p>
              </li>
            </ul>
          </article>
        </div>
      
        <article className='profile_techs'>
          <h3>Techs I've used</h3>
          <ul>
            <li>
              <div className='profile_techs-icon'>
                <img src={iconVite} alt="" />
              </div>
              <h4>Vite</h4>
            </li>
            <li>
              <div className='profile_techs-icon'>
                <img src={iconWebpack} alt="" />
              </div>
              <h4>Webpack</h4>
            </li>
            <li>
              <div className='profile_techs-icon'>
                <img src={iconSass} alt="" />
              </div>
              <h4>SASS/SCSS</h4>
            </li>
            <li>
              <div className='profile_techs-icon'>
                <img src={iconTailwind} alt="" />
              </div>
              <h4>Tailwind</h4>
            </li>
            <li>
              <div className='profile_techs-icon'>
                <img src={iconRedux} alt="" />
              </div>
              <h4>Redux</h4>
            </li>
            <li>
              <div className='profile_techs-icon'>
                <img src={iconGit} alt="" />
              </div>
              <h4>Git</h4>
            </li>
            <li>
              <div className='profile_techs-icon'>
                <img src={iconGithub} alt="" />
              </div>
              <h4>GitHub</h4>
            </li>
            <li>
              <div className='profile_techs-icon'>
                <img src={iconSwagger} alt="" />
              </div>
              <h4>Swagger</h4>
            </li>
            <li>
              <div className='profile_techs-icon'>
                <img src={iconThree} alt="" />
              </div>
              <h4>THREE js</h4>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience

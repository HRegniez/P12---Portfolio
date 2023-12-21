import React, {useState, useEffect} from 'react'
import '../styles/pages/hero.sass'
import AnimateLetters from '../components/AnimateLetters'
import HeroContact from '../components/HeroContact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faJsSquare, faCss3Alt, faHtml5, faSass } from '@fortawesome/free-brands-svg-icons';



const Hero = () => {
  const [scrollPos, setScrollPos] = useState(0)
  const [letterClass, setLetterClass] = useState('text-animate')
  const firstLineArray = [' ', 'H', 'e', 'n', 'r', 'i']

  const handleScroll = () => {
    setScrollPos(window.scrollY)
  }
  
  useEffect(() =>{
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  


  return (
    <section className='hero_wrapper'>
      <section id="home" className='hero'>

        <h1 className='hero_title' style={{ transform: `translateY(${scrollPos * 0.65}px)`, opacity:`${100 - (scrollPos * 0.18)}%`}}>
          Web Developer
        </h1>
        <div className='hero_intro'>
          <p className={letterClass} style={{ transform: `translateY(${scrollPos * -0.55}px)`}}>Hello world !</p>
          <h2 className='hero_name' style={{ transform: `translateY(${scrollPos * 0.55}px)`}}>
            <span className={`${letterClass} _11`}>I</span>
            <span className={`${letterClass} _12`}>'</span>
            <span className={`${letterClass} _13`}>m </span>
            
            <strong className='hero-space'>
              <AnimateLetters
                letterClass={letterClass}
                strArray={firstLineArray}
                idx={15}
              />
            </strong>
            <span className={`${letterClass} _21`}>,</span> 
          </h2>
          <p style={{ transform: `translateY(${scrollPos * -0.3}px)`}}>
            <span className={`${letterClass} _25`}>I </span>
            <span className={`${letterClass} _27 hero-space`}>a</span>
            <span className={`${letterClass} _28`}>m </span>
            <span className={`${letterClass} _30 hero-space`}>a</span>
            <span className={`${letterClass} _31`}>.</span>
            <span className={`${letterClass} _32`}>.</span>
            <span className={`${letterClass} _34`}>.</span>
            </p>
        </div>

          <HeroContact />
              
        <a href='https://github.com/HRegniez' target='_blanc' className='hero_github'>
          <FontAwesomeIcon icon={faGithub} className='hero_github-icon'/>
          <p>GitHub</p>
        </a>
        <FontAwesomeIcon icon={faReact} className='logo _30 hero_react' style={{ transform: `translateY(${scrollPos * 0.3}px)`, opacity:`${100 - (scrollPos * 0.15)}%`}} />
        <FontAwesomeIcon icon={faJsSquare} className='logo _37 hero_js' style={{ transform: `translateY(${scrollPos * 0.2}px)`, opacity:`${100 - (scrollPos * 0.15)}%`}} />
        <FontAwesomeIcon icon={faCss3Alt} className='logo _32 hero_css' style={{ transform: `translateY(${scrollPos * 0.75}px)`, opacity:`${100 - (scrollPos * 0.15)}%`}} />
        <FontAwesomeIcon icon={faHtml5} className='logo _35 hero_html' style={{ transform: `translateY(${scrollPos * 0.9}px)`, opacity:`${100 - (scrollPos * 0.15)}%`}} />
        <FontAwesomeIcon icon={faSass} className='logo _40 hero_sass'  style={{ transform: `translateY(${scrollPos * 0.25}px)`, opacity:`${100 - (scrollPos * 0.15)}%`}} />
      </section>
    </section>

  )
}

export default Hero

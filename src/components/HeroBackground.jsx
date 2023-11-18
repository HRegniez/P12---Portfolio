import React, {useEffect, useState} from 'react'

function HeroBackground() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0})

    const handleMouseMouve = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY})
    }

    useEffect(()=>{
        document.addEventListener('mousemove', handleMouseMouve)
        
        return () => {
            document.removeEventListener('mousemove', handleMouseMouve)
        }
    }, [])
    const gradientEffect = {
        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, #433D602B 0%, #433D6000 25%)`
    }
  return (
    <div className='hero_background-dark' >
      <div className='hero_background-light' style={gradientEffect}></div>
    </div>
  )
}

export default HeroBackground

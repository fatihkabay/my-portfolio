import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          My name is Mehmet Fatih and my surname is Kabay. I am 16 years old. I
          am studying in high school. I develop front-end and back-end, I have
          accumulated database knowledge.
        </p>
        <p>
          I would like to work as a full stack developer. I have B1 level
          English. I'm currently doing an internship somewhere
        </p>
        <p>
          I have visual studio usage, frontend and backend certification. I have
          a series on duolingo for more than 1 year.
        </p>
      </div>
    </div>
  )
}

export default About

import React from 'react';
import './css/Show.css';
import './css/Links.css'
import { GrLinkedin, GrGithub } from 'react-icons/gr'

function Links() {
  return (
    <div className="show">
      <h1>
        Links
      </h1>
      <a href="https://www.linkedin.com/in/tales-coelho/" target="_blank" rel='noopener noreferrer' className="box link">
        <span>Linkedin</span><GrLinkedin />
      </a>
      <a href="https://github.com/talescoelho" target="_blank" rel='noopener noreferrer' className="box link">
        <span>GitHub</span><GrGithub />
      </a>
    </div>
  )
}

export default Links

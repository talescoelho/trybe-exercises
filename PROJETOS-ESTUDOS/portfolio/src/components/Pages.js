import React from 'react'
import { Switch, Route } from "react-router-dom";
import Sobre from "./Sobre"
import Projects from "./Projects"
import Skills from "./Skills"
import Links from "./Links"
import './css/Pages.css'

function Pages() {
  return (
    <div className="main-container">
      <Switch>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/links">
          <Links />
        </Route>
        </Switch>
    </div>
  )
}

export default Pages

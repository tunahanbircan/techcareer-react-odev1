import React from 'react'
import About from './About'
import Contact from './Contact'
import LocationMap from './LocationMap'
import Project from './Project'

function PageContent() {
  return (
    <div>
      <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <Project></Project>
        <About></About>
        <Contact></Contact>
        <LocationMap></LocationMap>
      </div>
    </div>
  )
}

export default PageContent
import React from 'react'
import Navber from './Layouts/Navber'
import Container from './components/Container'
import Bnnaer from './Layouts/Bnnaer'
import Work from './Layouts/Work'
import Project from './Layouts/Project'
import FAQ from './components/FAQ'
import Faqs from './components/Faqs'
import FaqSection from './Layouts/FaqSection'
import Contact from './Layouts/Contact'
import Foter from './Layouts/Foter'

const App = () => {
  return (
    <div>
      <Navber/>
      <Bnnaer/>
      <Work/>
      <Project/>
      <FaqSection/>
      <Contact/>
      <Foter/>

    </div>
  )
}

export default App
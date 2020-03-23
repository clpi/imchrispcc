import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="about" keywords={[`gatsby`, `application`, `react`]} />
      <h1 className="about">about me</h1>
      <p className="description">What about me?</p>
    <p>
        I am a recent graduate at the University of Washington Seattle's Materials Scence & Engineering program. I'm a materials engineer by training with a strong proclivity and supplemental skillset in the realms of data science, full stack web development, and systems engineering. I'll update each of the relevant sections below as I continue to work on the site!</p>
      <div className="card" id="aboutCard">
        <h2>Materials</h2>
      </div>
      <div className="card" id="aboutCard">
        <h2>Data</h2>
      </div>
      <div className="card" id="aboutCard">
        <h2>Nanotech</h2>
      </div>


    </Layout>

)

export default About

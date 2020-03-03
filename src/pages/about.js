import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="about" keywords={[`gatsby`, `application`, `react`]} />
      <h1 className="about">about me</h1>
      <p className="description">What about me?</p>
    <p>
        I am a recent graduate at the University of Washington Seattle's Materials Scence & Engineering program. I'm a physical engineer by training strongly leaning into (I wouldn't quite call it pivoting!) towards software -- specifically, full stack web development and data science. I'll update each of the relevant sections below as I continue to work on the site!</p>
      <div className="card" id="aboutCard">
        <h3>Materials Engineer</h3>
      </div>
      <div className="card" id="aboutCard">
        <h3>Data Scientist</h3>
      </div>
      <div className="card" id="aboutCard">
        <h3>Software Engineer</h3>
      </div>


    </Layout>

)

export default About

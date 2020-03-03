import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="about" keywords={[`gatsby`, `application`, `react`]} />
      <h1 style={{alignItems:"center"}}>about me</h1>
    <p>
        I am a recent graduate at the University of Washington Seattle's Materials Scence & Engineering program. I'm a physical engineer by training strongly leaning into (I wouldn't quite call it pivoting!) towards software -- specifically, full stack web development and data science. Given that I am (as of March 2, 2020) devoting nearly all of my free time to honing these aforementioned skills, why not call it a pivot? Well, my ultimate goal is to truly synthesize these to disparate skills and build a materials/chemical informatic pipeline using knowledge both from cutting edge data science/web technologies and from my physical engineering background to build a truly innovative and game-changing service -- or at least, be involved in a project with a tangential aim. With that said, perspective is everything, and who knows what my aims will be a year, or even a few months, down the line!
    </p>
    </Layout>

)

export default About

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="projects" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="projects">projects</h1>
      <p>
        The projects I'm currently involved in are as follows (to be seriously updated later, perhaps with more in-depth separate pages describing the projects)
    </p>
      <p>
         I'm curretly in a transition period, in between graduating with my bachelors and hopefully finding a grad school program in the very near future.
      </p>
      <div className="card" id="projectsCard">
          <h2 className="projects">GEMSEC Neuropeptide Project</h2>
          <p>Use signal processing and statistical sequence motif analysis to predict candidate neuropeptides with graphene-binding behavior similar to a set of known graphene-binding peptides. Working on this project alongside other students in the Genetically Engineered Materials Science & Engineering Center.</p>
      </div>
        <div className="card" id="projectsCard">
            <h2 className="projects">Life tracking and analysis (top secret)</h2>
            <p>I need to take better care of my health, and while there's an abundance of tools which do a great job of facilitating the logging and tracking of personal health data, all of them stop there (with some providing some sort of novel reports). I want to dig a little deeper.</p>
      </div>

  </Layout>
)

export default Projects

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
      <div className="card" id="projectsCard">
          <h3>GEMSEC Neuropeptide Project</h3>
      </div>
        <div className="card" id="projectsCard">
            <h3>Life tracking and analysis (top secret)</h3>
      </div>

  </Layout>
)

export default Projects

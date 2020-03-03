import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="contact" keywords={[`gatsby`, `application`, `react`]} />
        <h1 className="contact">contact</h1>

      <p>If you need to contact me, please reach out to me at any of my following social media accounts!</p>

      <div className="card" id="contactCard">
            <h3>Github</h3>
      </div>

    <div className="card" id="contactCard">
            <h3>LinkedIn</h3>
      </div>

        <div className="card" id="contactCard">
        <h3>Twitter</h3>
      </div>

      </Layout>
)

export default Contact

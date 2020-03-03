import React from "react"
import Header from "../components/header"
import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
        <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <Header />
    <LandingBio />
        </div>
)

export default IndexPage

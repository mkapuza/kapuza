import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Malcolm Kapuza" />
    <h1>Hello,</h1>
    <p>
      My name is Malcolm Kapuza, and I am CTO at{" "}
      <a target="_blank" href="https://alliedcrowds.com/">
        AlliedCrowds
      </a>
    </p>
    <p></p>
    <div style={{ maxWidth: `200px`, marginBottom: `0.45rem` }}>
      <Image />
    </div>
    <ul>
      <p>Projects I've built or managed</p>
      <li>
        <a target="_blank" href="https://www.alliedcrowds.com">
          AlliedCrowds
        </a>
      </li>

      <li>
        <a target="_blank" href="https://www.isdb-innovate.org">
          IsDB Innovate
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="http://investment-guide-africa.make-it-initiative.org/#/"
        >
          Make-IT Investment Guide
        </a>
      </li>
      <li>
        <a target="_blank" href="http://investors.ghanacic.org/#/">
          GCIC Investor Directory
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="http://api.alliedcrowds.com/api-docs/index.html"
        >
          Capital Finder API
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.npmjs.com/package/@alliedcrowds/capital-finder-api"
        >
          Capital Finder NPM Package
        </a>
      </li>
      <li>
        <a target="_blank" href="http://greencrowds.org">
          GreenCrowds
        </a>
      </li>
      <li>
        <a target="_blank" href="http://proofexchange.com">
          ProofExchange
        </a>
      </li>
    </ul>
    <ul>
      <p>Some ways to get in touch</p>
      <li>
        <a target="_blank" href="http://github.com/mkapuza">
          GitHub
        </a>
      </li>
      <li>
        <a target="_blank" href="https://medium.com/@malcolm.kapuza">
          Medium
        </a>
      </li>
      <li>
        <a target="_blank" href="https://keybase.io/mkapuza">
          Keybase
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/malcolm-kapuza">
          LinkedIn
        </a>
      </li>
    </ul>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage

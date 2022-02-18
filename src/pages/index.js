import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Malcolm Kapuza" />
    <div>
      <Image />
    </div>
    <p
      style={{
        fontSize: `30px`,
        fontWeight: `bold`,
        marginBottom: `14px`,
      }}
    >
      Malcolm Kapuza
    </p>
    <p
      style={{
        fontSize: `20px`,
      }}
    >
      Portfolio Manager at{" "}
      <a
        href="https://lindy.digital"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: `#5C45C4` }}
      >
        Lindy Digital
      </a>
    </p>
  </Layout>
)

export default IndexPage

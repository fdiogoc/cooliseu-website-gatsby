import React, { useContext } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"

import SEO from "../components/seo"
import { useSiteMetaData } from "../hooks/use-site-metadata"

import AuthContext from "../utils/AuthContext"

export default ({ data, pageContext }) => {
  const { image } = useSiteMetaData()
  const Auth = useContext(AuthContext)
  console.log(Auth)
  console.log(pageContext)

  return (
    <Layout>
      <SEO title="Home" />

      <h1>{pageContext.eventoId}</h1>

      {image.map(({ src }, index) => (
        <>
          <img id={index} src={src} alt="Gatsby Docs are awesome" />
        </>
      ))}

      <h1>Palestrantes</h1>

      {data.allPalestrante.nodes.map(({ id, nome, evento }) => (
        <div key={id}>
          <h3>
            {nome} <span>— {evento.nome}</span>
          </h3>
        </div>
      ))}

      <h1>Paletsras</h1>

      {data.allPalestra.nodes.map(({ id, tema, palestrante }) => (
        <div key={id}>
          <h3>
            {tema} <span>— {palestrante.nome}</span>
          </h3>
        </div>
      ))}

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
export const query = graphql`
  query($eventoId: String) {
    allPalestrante(filter: { evento: { id: { eq: $eventoId } } }) {
      nodes {
        id
        nome
        evento {
          nome
        }
      }
    }
    allPalestra(filter: { evento: { id: { eq: $eventoId } } }) {
      nodes {
        id
        tema
        palestrante {
          nome
        }
      }
    }
  }
`

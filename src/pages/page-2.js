import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>Eventos </h1>
    <div>{console.log(data)}</div>
    {data.allEvento.nodes.map(({ id, nome, local }) => (
      <div key={id}>
        <h3>
          {nome} <span>— {local}</span>
        </h3>
      </div>
    ))}

    {data.allPalestrante.nodes.map(({ id, nome, evento }) => (
      <div key={id}>
        <h3>
          {nome} <span>— {evento.nome}</span>
        </h3>
      </div>
    ))}
  </Layout>
)
export const query = graphql`
  query {
    allEvento {
      nodes {
        nome
        id
        data
        local
      }
    }
    allPalestrante(filter: { evento: { id: { eq: "QnviOqDOtBCtmb6fBZ5n" } } }) {
      nodes {
        id
        nome
        evento {
          nome
        }
      }
    }
  }
`

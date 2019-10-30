import React, { useContext } from "react"
import { Link, graphql } from "gatsby"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import Layout from "../components/layout"

import pic02 from "../assets/images/pic02.jpg"
import styled from "styled-components"

import SEO from "../components/seo"
import { useSiteMetaData } from "../hooks/use-site-metadata"

import AuthContext from "../utils/AuthContext"

const Span = styled.span`
  text-transform: capitalize;
`

export default ({ data, pageContext }) => {
  const { nome } = useSiteMetaData()
  const { image } = useSiteMetaData()
  const Auth = useContext(AuthContext)

  return (
    <Layout>
      <SEO title={nome} />

      <section id="one" className="main style1 special">
        <div className="grid-wrapper">
          <div className="col-12">
            <header className="major">
              <h2>Palestras</h2>
            </header>
          </div>
          {data.allPalestra.nodes.map(
            ({ id, tema, palestrante, data, descricao }) => (
              <div className="col-6" key={id}>
                <div className="data_dia">
                  {format(new Date(data), "dd/MM", {
                    locale: ptBR,
                  })}
                </div>
                <div className="data_horario">
                  <Span>
                    {format(new Date(data), "eeee - ", {
                      locale: ptBR,
                    })}
                  </Span>
                  {format(new Date(data), "p", {
                    locale: ptBR,
                  })}
                </div>

                <header className="major">
                  <h2>
                    {tema}
                    <br />
                    {palestrante.nome}
                  </h2>
                </header>
                <p>{descricao}</p>
              </div>
            )
          )}
        </div>
      </section>
      <section id="three" className="main style1 special">
        <div className="grid-wrapper">
          <div className="col-12">
            <header className="major">
              <h2>Palestrantes</h2>
            </header>
          </div>
          {data.allPalestrante.nodes.map(({ id, tema, nome }) => (
            <div key={id} className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>{nome}</h3>
              <p>{nome}</p>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="four" className="main style2 special">
        <div className="container">
          <header className="major">
            <h2>Ipsum feugiat consequat?</h2>
          </header>
          <p>Sed lacus nascetur ac ante amet sapien.</p>
          <ul className="actions uniform">
            <li>
              <a href="#" className="button special">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </section>
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
        descricao
        data
        palestrante {
          nome
        }
      }
    }
  }
`

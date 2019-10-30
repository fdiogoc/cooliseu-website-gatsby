import React from "react"
import { useSiteMetaData } from "../hooks/use-site-metadata"

const Footer = () => {
  const { nome, inicio, descricao, image, cor } = useSiteMetaData()

  return (
    <section id="footer">
      <ul className="actions">
        <li>
          <a href="#one" className="button scrolly">
            {inicio}
          </a>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <a href="#" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-envelope">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Diogo Cardoso Fernandes</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </section>
  )
}

export default Footer

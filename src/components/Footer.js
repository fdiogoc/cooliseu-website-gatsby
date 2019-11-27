import React from "react"
import { useSiteMetaData } from "../hooks/use-site-metadata"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        Diogo Cardoso Fernandes
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const Footer = () => {
  const { fim } = useSiteMetaData()

  return (
    <section id="footer">
      <ul className="actions">
        <li>
          <a href="#one" className="button scrolly">
            {fim}
          </a>
        </li>
      </ul>

      <Box mt={8}>
        <Copyright />
      </Box>
    </section>
  )
}

export default Footer

import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetaData = () => {
  const site = useStaticQuery(
    graphql`
      query SiteMetaData {
        evento(id: { eq: "Su0e3Iy0rXxBObnRYQvD" }) {
          nome
          cor
          inicio(formatString: "DD/MM")
          fim
          descricao
          image {
            src
          }

          local
        }
      }
    `
  )
  return site.evento
}

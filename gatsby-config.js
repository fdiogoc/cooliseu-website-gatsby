require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    eventoId: "QnviOqDOtBCtmb6fBZ5n",
  },
  plugins: [
    {
      resolve: `gatsby-source-firestore`,
      options: {
        // credential or appConfig
        credential: require(`./credentials.json`),

        types: [
          {
            type: `Evento`,
            collection: `eventos`,
            //custom query..
            query: ref => ref.limit(10),
            map: doc => ({
              nome: doc.nome,
              local: doc.local,
              data: doc.data_inicio.toDate(),
              created: doc.createdAt.toDate(),
              cor: doc.cor,
            }),
          },
          {
            type: `Palestrante`,
            collection: `palestrantes`,
            //custom query..
            query: ref => ref.limit(10),
            map: doc => ({
              nome: doc.nome,
              email: doc.local,
              evento___NODE: doc.eventoId,
            }),
          },
          {
            type: `Palestra`,
            collection: `palestras`,

            map: doc => ({
              tema: doc.tema,
              evento___NODE: doc.eventoId,
              palestrante___NODE: doc.palestranteId,
              data: doc.data.toDate(),
            }),
          },

          {
            type: `Sala`,
            collection: `salas`,
            //custom query..
            query: ref => ref.limit(10),
            map: doc => ({
              evento___NODE: doc.eventoId,
              horarios: doc.horarios,
            }),
          },
          {
            type: `Participante`,
            collection: `participantes`,
            //custom query..
            query: ref => ref.limit(10),
            map: doc => ({
              evento___NODE: doc.eventoId,
              email: doc.email,
              nome: doc.nome,
              admin: doc.isAdmin,
            }),
          },
          {
            type: `Agenda`,
            collection: `agendas`,
            map: doc => ({
              horario: doc.horario,
              evento___NODE: doc.eventoId,
              participante___NODE: doc.participanteId,
              sala___NODE: doc.salaId,
            }),
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

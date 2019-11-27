require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Cooliseu Website`,
    description: `Kick off your next, great Website`,
    author: `@fdiogoc`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-firestore`,
      options: {
        // credential or appConfig
        credential: require(`./credentials.json`),

        types: [
          {
            type: `Evento`,
            collection: `eventos`,
            query: ref => ref.limit(10),
            map: doc => ({
              nome: doc.nome,
              local: doc.local,
              inicio:
                doc.data_inicio == undefined ? "" : doc.data_inicio.toDate(),
              fim: doc.data_fim == undefined ? "" : doc.data_fim.toDate(),
              cor: doc.cor,
              image: doc.image,
              local: doc.local,
              descricao: doc.descricao,
            }),
          },
          {
            type: `Palestrante`,
            collection: `palestrantes`,
            //custom query..
            query: ref => ref.limit(10),
            map: doc => ({
              id: doc.id,
              nome: doc.nome,
              email: doc.email,
              descricao: doc.descricao == undefined ? "" : doc.descricao,
              image: doc.image == undefined ? [] : doc.image,
              evento___NODE: doc.eventoId,
            }),
          },
          {
            type: `Palestra`,
            collection: `palestras`,

            map: doc => ({
              id: doc.id,
              tema: doc.tema,
              descricao: doc.descricao,
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
              id: doc.id,
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
              id: doc.id,
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
              id: doc.id,
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
    "gatsby-plugin-sass",
  ],
}

module.exports = {
  siteMetadata: {
    title: `Empleo Now`,
    description: `Compañía Internacional Líder en Seguros abriendo mercado latino en la Florida busca profesionales con experiencia en ventas, con licencia 215 o 240. Si todavía no tienes alguna de estas licencias te ayudamos a sacarla en 2 semanas`,
    author: `@empleonow`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/baby-samples-savings-new/*`] },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: '1194868',
        sv: '6',
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '184623225387301',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            variants: [`400`, `700`],
            subsets: [`latin`],
          },
          {
            family: `Roboto`,
            variants: [`500`, `700`],
            subsets: [`latin`],
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
        name: `health-insurance-coverage`,
        short_name: `hic`,
        start_url: `/`,
        background_color: `#354eaa`,
        theme_color: `#354eaa`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://ivanhueso.us20.list-manage.com/subscribe/post?u=436cf266c99be6b9809e978d9&amp;id=a077dcf915', // see instructions section below
      },
    },
  ],
}

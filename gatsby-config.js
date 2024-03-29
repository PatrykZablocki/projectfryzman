module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    `gatsby-plugin-react-helmet`,
  ],
}
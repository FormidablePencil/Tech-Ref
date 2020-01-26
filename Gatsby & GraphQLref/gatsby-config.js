module.exports = {
  siteMetadata: {
    title: `Pandas Bitches`,
    author: `The New York Times`, 
  },
  plugins: [
    {                                        //This is the source pluggin
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-transformer-remark`,             //This is the transformer pluggin. This is what adds the 'AllMarkdownRemark' & 'MarkdownRemark' option.
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
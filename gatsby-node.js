/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      allPost {
        edges {
          node {
            id
            title
            author
          }
        }
      }
    }
  `)

  const {
    data: {
      allPost: { edges: allPostEdges },
    },
  } = result

  const posts = []

  allPostEdges.forEach(({ node }) => {
    createPage({
      path: `/post/${node.id}/`,
      component: require.resolve("./src/templates/post.js"),
      context: {
        post: node,
      },
    })
    posts.push(node)
  })

  createPage({
    path: `/`,
    component: require.resolve("./src/templates/all-posts.js"),
    context: { posts },
  })
}

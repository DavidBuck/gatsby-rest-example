const axios = require("axios")

const get = endpoint => axios.get(`http://localhost:3000${endpoint}`)
const POST_NODE_TYPE = `Post`

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions

  const { data } = await get(`/posts`)

  data.forEach(post =>
    createNode({
      ...post,
      id: createNodeId(`${POST_NODE_TYPE}-${post.id}`),
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        content: JSON.stringify(post), // optional
        contentDigest: createContentDigest(post),
        description: "example restAPI source", // optional
      },
    })
  )
}

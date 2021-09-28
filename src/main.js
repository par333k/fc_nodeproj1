// @ts-check
const http = require('http')

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
  {
    id: 'my_first_post',
    title: 'My 1 post',
    content: 'hello~',
  },
  {
    id: 'my_second_post',
    title: 'My second post',
  }
]
/**
 *  GET /posts
 *  GET /posts/:id
 *  POST /posts
 */

const server = http.createServer((req, res) => {
  const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/;
  const postIdRegexResult = req.url && POSTS_ID_REGEX.exec(req.url) || undefined

  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200
    res.end('list of posts')
  } else if (postIdRegexResult) {
    const postId = postIdRegexResult[1]
    res.statusCode = 200
    res.end( `${postId}`);
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200
    res.end('Creating post')
  } else {
    res.statusCode = 404
    res.end('Not found');
  }
  res.statusCode = 200
  res.end('Hello!')
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`Hello world, the server is listening at port: ${PORT}`)
})

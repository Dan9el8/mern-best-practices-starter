import { Post } from '../db/model/post.js'

export async function createPost({ title, author, contents, tags
}) {
  const post = new Post({ title, author, contents, tags })
  return await post.save()
}

async function listPosts(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {
    return await Post.find(query).sort({ [sortBy]: sortOrder })
}

//list all posts function
export async function listAllPosts(options) {
  return await listPosts({}, options)
}

//list post by author function
export async function listPostsByAuthor(author, options) {
  return await listPosts({ author }, options)
}

//list post by tag function
export async function listPostsByTag(tags, options) {
  return await listPosts({ tags }, options)
}

export async function getPostById(postId) {
  return await Post.findById(postId)
}

//update post function
export async function updatePost(postId, { title, author,
contents, tags }) {
  return await Post.findOneAndUpdate(
    { _id: postId },
    { $set: { title, author, contents, tags } },
    { new: true },
  )
}

//delete post function
export async function deletePost(postId) {
  return await Post.deleteOne({ _id: postId })
}
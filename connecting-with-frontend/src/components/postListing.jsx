import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Post } from './Post.jsx'

export function PostList({ posts = [] }) {
    return (
    <div>
      {posts.map((post) => (
        <Post {...post} key={post._id} />
      ))}
    </div>
  )
}
//we return the post component for each post
<Post
  title={post.title}
  author={post.author}
  contents={post.contents}
/>
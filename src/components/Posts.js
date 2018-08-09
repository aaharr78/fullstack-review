import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Posts(props) {
  return (
    <div>
      {props.posts.map(post => {
        return (
          <Link to={`/posts/${post.id}`}>
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.author}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

let mapStateToProps = state => {
  return {
    posts: state.posts.data
  }
}

export default connect(mapStateToProps)(Posts)
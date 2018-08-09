import React from 'react'
import { connect } from 'react-redux'

function Post(props) {
  return (
    <div>
      {props.post && <div>
        <h1>{props.post.title}</h1>
        <p>{props.post.author}</p>
        <hr/>
        <p>{props.post.content}</p>
      </div>
       
      }
      
    </div>
  )
}

let mapStateToProps = (state, props) => {
  let { id } = props.match.params
  console.log(111111111, id)
  let post = state.posts.data.find(post => Number(post.id) === Number(id))
  return { post }
}

export default connect(mapStateToProps)(Post)
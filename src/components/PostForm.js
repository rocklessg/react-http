import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '',
         body: ''
      }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
          .post('https://jsonplaceholder.typicode.com/posts', this.state)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
    }

  render() {
    const {userId, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input 
                  type="text" 
                  name="userId" 
                  onChange={this.changeHandler}
                  value={userId}
                  placeholder="user id"
                />
            </div>
            <div>
            <input 
                  type="text" 
                  name="title" 
                  onChange={this.changeHandler}
                  value={title}
                  placeholder="title"
                />
            </div>
            <div>
            <input 
                  type="text" 
                  name="body" 
                  onChange={this.changeHandler}
                  value={body}
                  placeholder="body"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm

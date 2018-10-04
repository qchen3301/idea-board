import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class Login extends Component {
    state = {
        users:[],
        newUser: {
            userName:''
        }
    }

    //call axios directly in the cDM function
    componentDidMount = async () => {
       const response = await axios.get('/api/users') 
       console.log(response.data) 
       this.setState({users: response.data})
    }
    
    handleChange = (event) => {
        //take it 
        const newUser = {...this.state.newUser}
        //change it
        newUser[event.target.name] = event.target.value //the name of the target that the event was triggered on
        //put it back
        this.setState({newUser: newUser})
    }

    handleSubmit = async (event) => {
        event.preventDefault()//stop auto-reload of page

        //first param: send to location in database
        //second param: package to send
        const response = await axios.post('/api/users', this.state.newUser)
        
        //update user[] in state so the component reflects this change dynamically
        //take it 
        const users = [...this.state.users]
        //change it
        users.push(response.data)
        //put it back
        this.setState({users : users})
    }

  render() {
      const usersList = this.state.users.map((user, i) => {
          return ( 
          <div>
          <Link to={`/users/${user._id}`} key={i}>
            Name: {user.userName}
          </Link>
          </div> )
      })
    return (
      <div>
        <h1>Login Page</h1>
        <p>{usersList}</p>
        <form onSubmit={this.handleSubmit}>
            <input 
            type='text' 
            name='userName'
            value={this.state.newUser.userName} 
            onChange={this.handleChange}/>
            <input type='submit' value='Create New User' />
        </form>
      </div>
    )
  }
}

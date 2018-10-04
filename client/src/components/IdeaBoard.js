import React, { Component } from 'react'
import axios from 'axios'

export default class IdeaBoard extends Component {
    state = {
        response: {}
    }

    getUsers = () => {
        axios.get('/api/users')
        .then(response => console.log(response))
    }

    componentDidMount = () => {
        this.getUsers()
    }

  render() {
    return (
      <div>
        H E R E <br/>
        C O M E S <br/>
        D A T <br/>
        B O I <br/>
        ( O H S H I T W H A D D U P )<br/>
        <img src="https://i.imgur.com/HhblAEG.gif" alt="ohshitwaddup"/>
      </div>
    )
  }
}

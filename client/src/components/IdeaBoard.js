import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledIdea = styled.div`
  background-color: blue;
  border: 1px solid black;
  width: 30vw;
`

export default class IdeaBoard extends Component {
    state = {
        user: {},
        ideas: []
    }

    getUser = async () => {
      const userId = this.props.match.params.userId
      const response = await axios.get(`/api/users/${userId}`)
      this.setState({
        user: response.data, //.data is the actual info taken from params
        //.ideas could be extracted from .data 
        //because the "ideas" of a user are already contained inside user
        ideas: response.data.ideas.reverse()}) //reverse is an array function
    }

    componentDidMount = () => {
        this.getUser()
    }

    handleNew = async () => {
      const userId = this.props.match.params.userId
      const newIdea = await axios.post(`/api/users/${userId}/ideas`)
      await this.getUser() 
    }

    handleDelete = async (ideaId) => {
      const userId = this.props.match.params.userId
      await axios.delete(`/api/users/${userId}/ideas/${ideaId}`)
      await this.getUser()
    }

    handleChange = (event, i) => {
      //take it out
      const ideas = [...this.state.ideas]
      //change it
      ideas[i][event.target.name] = event.target.value
      //put it back
      this.setState({ideas})
    }

    updateIdea = async (i) => {
      const userId = this.props.match.params.userId
      const updatedIdea = this.state.ideas[i]
      await axios.put(`/api/users/${userId}/ideas/${updatedIdea._id}`, updatedIdea)
    }

  render() {
    const ideasList = this.state.ideas.map((idea, i) => {
      return (
        <StyledIdea key={i}>
          {/* ()=> is an 'anonymous function' to prevent the function handleDelete 
          from triggering on page load */}
          <div onClick={()=>this.handleDelete(idea._id)}>
            X
          </div>
          <input type='text' name='title' value={idea.title} 
            onChange={(event) => this.handleChange(event, i) } 
            onBlur={()=> this.updateIdea(i)}/>
            
          <input type='text' name='title' value={idea.description} 
            onChange={(event)=> this.handleChange(event, i) } 
            onBlur={()=> this.updateIdea(i)}/>
        </StyledIdea>
      )
    })
    return (
      <div>
        <h1>smoke weed <i>errrry</i> day, {this.state.user.userName}</h1>
        <h1>{ideasList}</h1>
      </div>
    )
  }
}

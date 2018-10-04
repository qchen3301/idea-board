import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        users:[
            {
                "_id": "5bb4ef811cd6ab19bcea94d9",
                "userName": "elon_musk",
                "password": "spaceiscool",
                "ideas": [
                    {
                        "_id": "5bb4ef811cd6ab19bcea94d7",
                        "title": "Fly to Mars",
                        "description": "Earth isn't Red enough. Let's move to a new planet"
                    },
                    {
                        "_id": "5bb4ef811cd6ab19bcea94d8",
                        "title": "Build a Car",
                        "description": "Gas is too expensive. I'm gonna build a car that doesn't need gas"
                    }
                ],
                "__v": 0
            }
        ]
    }
  render() {
      const usersList = this.state.users.map((user, i) => {
          return <div>Name: {user.userName}</div>
      })
    return (
      <div>
        <h1>Login Page</h1>
        <p>{usersList}</p>
      </div>
    )
  }
}

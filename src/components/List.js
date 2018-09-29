import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <ul>
        {
          this.props.list.map((user) => {
            return <li key={user.login}>{user.login}</li>
          })
        }
      </ul>
    )
  }
}

export default List;
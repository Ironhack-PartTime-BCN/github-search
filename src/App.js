import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

import { githubApi } from './lib/github-service';

import './App.css';

class App extends Component {
  state = {
    list: [],
    status: 'loaded'
  }
  
  handleSubmit = (value) => {
    this.setState({
      status: 'loading',
    })
    githubApi.getUsers(value)
      .then(({ data }) => {
        this.setState({
          list: data.items,
          status: 'loaded',
        })
      }).catch((err) => {
        this.setState({
          status: 'error',
        })
      })
  }

  renderStatus = () => {
    const { status } = this.state;
    switch (status) {
      case 'loaded':
        return <List list={this.state.list} /> ;
      case 'loading':
        return 'Loading';
      case 'error':
        return (
          <div>error no puedo!!!</div>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div className="container">
        <Header >Github Search</Header>
        <Form onSubmit={this.handleSubmit}/>
        {this.renderStatus()}
      </div>
    );
  }
}

export default App;

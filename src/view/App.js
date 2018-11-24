import React, { Component, Fragment } from 'react';
import './App.css';
import { Header } from './app/Header/Header';
import { Footer } from './app/Footer/Footer';
import { Main } from '../view/app/Main';
import { fetchDataUsers } from '../services/UserService';
import UserCard from './app/UserCard';
import UsersLists from './app/UsersLists';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
fetchUsers = () => {

  fetchDataUsers()
          .then(usersList => {
            this.setState({users: usersList})

          })
}
        


  
  render() {
    return (
      <Fragment>
        <Header />
        <Main listOfUsers={this.usersList} />
        <Footer />

      </Fragment>
    );
  }
}

export default App;

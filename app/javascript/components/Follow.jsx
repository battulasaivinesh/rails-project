import React, { Component } from "react";
import UserStore from "../stores/UserStore";
import UserActions from "../actions/UserActions";
import { Link } from "react-router-dom";
UserActions.getAllUsers();
let getAppState = () => {
  console.log(UserStore);
  return UserStore.getAll();
};

class Follow extends Component {
  state = {
    users: getAppState()
  };

  componentDidMount() {
    UserStore.addChangeListner(this._onChange);
  }

  componentWillUnmount() {
    UserStore.removeChangeListner(this._onChange);
  }

  _onChange = () => {
    this.setState({ users: getAppState() });
  };

  followUser(userId) {
    UserActions.followUser(userId);
  }

  followClasses(following) {
    return "secondary-content btn-floating " + (following ? "green" : "grey");
  }

  render() {
    let users = this.state.users.map(user => {
      return (
        <li key={user.id} className="collection-item avatar">
          {" "}
          <img src={user.gravatar} className="circle" />
          <span className="title">{user.name}</span>
          <a
            className={this.followClasses(user.following)}
            onClick={this.followUser.bind(this, user.id)}
          >
            <i className="material-icons">person_pin</i>
          </a>
        </li>
      );
    });
    return (
      <div>
        <h3>Who to follow</h3>
        <ul className="collection">{users}</ul>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default Follow;

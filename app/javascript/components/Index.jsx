import React from "react";
// import PropTypes from "prop-types";
import TweetBox from "./TweetBox";
import { Link } from "react-router-dom";
import TweetList from "./TweetList";
import TweetActions from "../actions/TweetActions";
import TweetStore from "../stores/TweetStore";

let getAppState = () => {
  return TweetStore.getAll();
};

class Index extends React.Component {
  state = {
    tweetsList: getAppState()
  };

  componentDidMount() {
    TweetActions.getAllTweets();
    TweetStore.addChangeListner(this._onChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeListner(this._onChange);
  }

  _onChange = () => {
    this.setState({ tweetsList: getAppState() });
  };

  render() {
    console.log("Component");
    return (
      <div className="container">
        <Link to="/follow">Who To Follow</Link>
        <TweetBox />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

export default Index;

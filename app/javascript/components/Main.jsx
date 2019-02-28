import React from "react";
// import PropTypes from "prop-types";
import TweetBox from "./TweetBox";
import TweetList from "./TweetList";
import TweetActions from "../actions/TweetActions";
import TweetStore from "../stores/TweetStore";

TweetActions.getAllTweets();

let getAppState = () => {
  return TweetStore.getAll();
};

class Main extends React.Component {
  state = {
    tweetsList: getAppState()
  };

  componentDidMount() {
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
        <TweetBox />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

export default Main;

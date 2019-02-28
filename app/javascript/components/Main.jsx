import React from "react";
import PropTypes from "prop-types";
import TweetBox from "./TweetBox";
import TweetList from "./TweetList";

let mockTweets = [
  { id: 0, name: "Vinesh", body: "My Tweet" },
  { id: 1, name: "Vinesh", body: "My Second Tweet" },
  { id: 2, name: "Vinesh", body: "My Third Tweet" }
];

class Main extends React.Component {
  state = {
    tweetsList: mockTweets
  };

  addTweet = tweetToAdd => {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({ id: Date.now(), name: "Guest", body: tweetToAdd });
    this.setState({ tweetsList: newTweetsList });
  };

  render() {
    console.log("Component");
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet} />
        <TweetList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

Main.propTypes = {
  greeting: PropTypes.string
};
export default Main;

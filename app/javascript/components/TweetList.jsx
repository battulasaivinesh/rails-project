import React, { Component } from "react";
import Tweet from "./Tweet";
class TweetList extends Component {
  render() {
    let tweets = this.props.tweets.map(tweet => (
      <Tweet key={tweet.id} {...tweet} />
    ));
    return (
      <div>
        <ul className="collection">{tweets}</ul>
      </div>
    );
  }
}

export default TweetList;

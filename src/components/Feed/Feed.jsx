import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  return (
    <div className="col feed">
      <TweetBox setTweetText = {props.setTweetText} tweetText = {props.tweetText} tweets = {props.tweets} setTweets = {props.setTweets} userProfile = {props.userProfile}/>
      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{
        props.tweets.map((tweet, index) =>{
          return <Tweet key = {tweet.name + toString(index)} tweet = {tweet}/>
        })
      }</div>
    </div>
  )
}

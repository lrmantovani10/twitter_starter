import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"
import UserProfile from "../UserProfile/UserProfile"

export default function TweetBox(props) {
  let handleOnTweetTextChange = function(changeEvent){
    props.setTweetText(changeEvent.target.value)
  }
  let handleOnSubmit = function(){
    let newTweet = {"name" : props.userProfile.name, "handle" : props.userProfile.handle, "text" : props.tweetText,
    "comments": 0, "retweets": 0, "likes": 0, "id": props.tweets.length}
    props.setTweets((x)=>[...x,newTweet])
    props.setTweetText("")
  }
  return (
    <div className="tweet-box">
      <TweetInput handleOnChange = {handleOnTweetTextChange} value = {props.tweetText}/>
      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText = {props.tweetText}/>
        <TweetSubmitButton tweetText = {props.tweetText} handleOnSubmit = {handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  let charactersLeft = 140 - props.tweetText.length
  let elementClass = "tweet-length"
  if(charactersLeft < 0){
    elementClass += " red"
  }
  else if(charactersLeft == 140){
    return null
  }
  else{
    return <span className={elementClass}>{charactersLeft}</span>
  }
}

export function TweetSubmitButton(props) {
  if(props.tweetText.length > 0 && props.tweetText.length < 140){
    return (
      <div className="tweet-submit">
        <i className="fas fa-plus-circle"></i>
        <button className="tweet-submit-button" onClick = {props.handleOnSubmit}>Tweet</button>
      </div>
    )
  }
  else{
    return(null)
  }
}

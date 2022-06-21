import * as React from "react"
import Feed from "./components/Feed/Feed"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from "./components/UserProfile/UserProfile"
import Advertisements from "./components/Advertisements/Advertisements"
import { codepathUserProfile, firstTweet, navLinks } from "./constants"
import { useState } from "react"

export default function App() {
  let [userProfile, setUserProfile] = useState(codepathUserProfile)
  let [tweets, setTweets] = useState([firstTweet])
  let [tweetText, setTweetText] = useState("")
  return (
    <div className="app">
      <Navbar navLinks = {navLinks}/>
      <main>
        <UserProfile userProfile = {userProfile}/>
        <Feed setTweetText = {setTweetText} tweetText = {tweetText} tweets = {tweets} setTweets = {setTweets} userProfile = {userProfile}/>
        <Advertisements tweets = {tweets} setTweets = {setTweets} userProfile = {userProfile}/>
      </main>
    </div>
  )
}

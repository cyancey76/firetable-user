/*

1.) make a copy of this file
2.) rename copy to config.js
3.) add your desired configs/creds

*/
var ftconfigs = {
   roomName: "Fuzzy Robot Disco Bear", // what you'd like your room name to be displayed as
   roomNameShort: "FRDB", // if you have a long room name, put a shorter version here (like 2 words probably max).
   defaultAlbumArtUrl: "http://cyancey76.github.io/img/discoball.png", // url of an image to use for tracks with no album art. should be a square and at least 500x500 px for best results.
   roomInfoUrl: "https://www.fuzzyrobotdiscobear.com/music/", // Change what the "?" button at the top of the page links to. This can be any URL
   firebase:{ // put the info from your Firebase app here. can be found in the Firebase console
    apiKey: "AIzaSyDQWEtmBPi7w_R0-foS1WnDvBqKg9rgXcQ",
    authDomain: "fuzzy-robot-disco-bear.firebaseapp.com",
    databaseURL: "https://fuzzy-robot-disco-bear-default-rtdb.firebaseio.com/"
  },
  youtubeKey: "AIzaSyAYcWJHwxxgyQaBN34joYOghOKGLCU6qxM", // Your youtube api client key. Be sure to whitelist your domain for this key in the google api console.
  soundcloudKey: "587aa2d384f7333a886010d5f52f302a" // Your soundcloud api key
};

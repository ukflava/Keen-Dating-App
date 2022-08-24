# Final Project: Keen Dating App 
Keen is a dating app built with React, Node, Express, and PostgreSQL

## Contributors:
* [Phil Yoo](https://github.com/josemourinho333)
* [Denis Kruteskii](https://github.com/ukflava)
* [Ava Kuang](https://github.com/avacadok)

## Core Features:
* Users can edit their profile and see preview of the new changes
* Users can see other profiles based on preferences and swipe left or right
* Once both users have liked eachother they will be matched and can start chatting in real time or video call
* Users have access to emojis and gifs built into the chat system
* Users can update their profile based on multiple things such as gender, age, location, height, lifestyle choices and more

## Other features/clean ups for the future:
* Account creation and sign up flow
* Voice only call
* Implement Spotify API to display top listened artists and set their fav song on their profile
* Blocking + Unmatch system
* Various clean ups - loading spinners, refactor, bcrpyt 
* Better UI interfaces - incoming facetime call alert, updated profile alerts, various minor things to improve user experience

## Final Product

### Main Use, Live Chatting and Video Call
![Swiping](https://github.com/josemourinho333/Keen-Dating-App/blob/master/docs/keen-swiping.gif?raw=true)
![Live Chat](https://github.com/josemourinho333/Keen-Dating-App/blob/master/docs/keen-livechat.gif?raw=true)
![Video Call](https://github.com/josemourinho333/Keen-Dating-App/blob/master/docs/keen-videocall.gif?raw=true)

### Landing
![Login Page](https://github.com/josemourinho333/Keen-Dating-App/blob/master/docs/Landing-Login.PNG?raw=true)

### Home
![Home Page](https://github.com/josemourinho333/Keen-Dating-App/blob/master/docs/Homepage.PNG?raw=true)

### Matches
![Matches Page](https://github.com/josemourinho333/Keen-Dating-App/blob/master/docs/Matches-page.PNG?raw=true)

### Preferences Page + Preference Option
![Pref Page](https://github.com/josemourinho333/Keen-Dating-App/blob/master/docs/Preferences-page.PNG?raw=true)
![Pref Option](https://github.com/josemourinho333/Keen-Dating-App/blob/master/docs/Preference-option.PNG?raw=true)

### Profile View/Edit
![Profile View](https://github.com/josemourinho333/Keen-Dating-App/blob/master/docs/Profile-view-edit.PNG?raw=true)
![Profile Edit](https://github.com/josemourinho333/Keen-Dating-App/blob/master/docs/Profile-view-edit-2.PNG?raw=true)

### Emojis/Giphy API
![Giphy](https://github.com/josemourinho333/Keen-Dating-App/blob/master/docs/Chatting-giphy.PNG?raw=true)
![Emojis](https://github.com/josemourinho333/Keen-Dating-App/blob/master/docs/Chatting-emojis.PNG?raw=true)

## Dependencies 
### Front End
* "@giphy/js-fetch-api": "^4.4.0",
* "@giphy/react-components": "^6.0.1",
* "@heroicons/react": "^1.0.6",
* "axios": "^0.18.1",
* "dotenv": "^16.0.1",
* "emoji-picker-react": "^3.6.1",
* "moment": "^2.29.4",
* "multi-range-slider-react": "^1.0.7",
* "pigeon-maps": "^0.21.0",
* "react": "^16.8.6",
* "react-dom": "^16.8.6",
* "react-router": "^6.3.0",
* "react-router-dom": "^6.3.0",
* "react-scripts": "^5.0.1",
* "react-tinder-card": "^1.4.5",
* "socket.io-client": "^4.5.1",
* "tailwindcss": "^3.1.8"
* "peerjs"

### Back End
* "body-parser": "^1.18.3",
* "cookie-session": "^2.0.0",
* "dotenv": "^16.0.1",
* "express": "^4.18.1",
* "nodemon": "^1.19.4",
* "pg": "^8.7.3",
* "socket.io": "^4.5.1"

### Getting Started
1. Clone the repo
2. Create .env file and fill out the following with your own creds
   -  Backend - can copy this one
      - PGHOST=localhost
      - PGUSER=labber
      - PGDATABASE=final_2
      - PGPASSWORD=labber
      - PGPORT=5432
   - Frontend - use your own creds
      - REACT_APP_MQ_KEY='mapquest_api_key'
      - REACT_APP_GIPHY_KEY='giphy_api_key'

3. NPM I in both express-back-end and react-front-end directories
4. Cd into express-back-end and start with npm run go
5. Cd into react-front-end and start with npm start 

Hope you enjoyed our app and all the work we put into it! 
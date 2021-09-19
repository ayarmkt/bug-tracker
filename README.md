# React Bug Tracker App

## Overview

This Bug Tracker App can be used to manage and keep track of the bugs in a project you are working on. It had an authentication functions (login, signup, logout) as well as bug data management functions (read, add, edit, delete).

## Tech Stack
Tech Stack: React (including React Context) | Redux | CSS | Firebase<br>
Platform: Firebase

## Final Product

**Live Site:** bug-tracker-app-75bd0.firebaseapp.com

**Authentication**<br>
- Utilized Firebase Authentication to either Login or Sign Up.
- Basic form validation using custom hook. The form cannot be submitted while the form is invalid. 
- Notification displayed on form submition (pending, error). If the submition succeeded, the page is redirected to the dashboard page.
- Authentication is managed by React Context. Upon login, the token and its expiration date are stored in localStorage and a logout timer is set. When it expires, the user is automatically logged out.
- 


**Notification Messages**<br>
A loading message is shown when the app is fetching data. An error message is shown when results cannot be found.


## Further Information About the Code

1. Rendered different conditions using a custom hook and a switch statement
2. Used React Context to manage state for the weather and UI

## Getting Started

1. Fork and then clone this repository
2. Install npm with `npm install`
3. Create a .env file based on .env.example. Your API key can be obtained on [OpenWeatherMap](https://openweathermap.org/)
4. Run `npm start` to start the server in development

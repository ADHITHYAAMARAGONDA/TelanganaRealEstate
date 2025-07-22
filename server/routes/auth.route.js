import express from 'express'
import {
  signup,
  signin,
  google,
  signOut,
} from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/google', google)
router.get('/signout', signOut)

export default routerProject settings
General
Cloud Messaging
Integration
Service accounts
Data privacy
Users and permissions
Your project
Project name
telangana-realestate
Project ID
telangana-realestate
Project number
18024727059
Web API key
No web API key for this project
Environment
This setting customises your project for different stages of the app lifecycle
Environment type
Unspecified
Your apps
Web apps
TelanganaRealEstate
Web app
App nickname
TelanganaRealEstate
App ID
1:18024727059:web:9f753cf4fbec6a6bf875e6
note:
This app isn't linked to a Google Analytics stream. To enable Analytics reporting, create a stream for this app.
SDK setup and configuration

npm

CDN

Config
If you're already using NPM and a module bundler such as webpack or Rollup, you can run the following command to install the latest SDK (Learn more):

npm install firebase
Then, initialise Firebase and begin using the SDKs for the products that you'd like to use.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAilRrBxDl6WKfE2jnDens0HtkKvWu5M6E",
  authDomain: "telangana-realestate.firebaseapp.com",
  projectId: "telangana-realestate",
  storageBucket: "telangana-realestate.firebasestorage.app",
  messagingSenderId: "18024727059",
  appId: "1:18024727059:web:9f753cf4fbec6a6bf875e6",
  measurementId: "G-B7HT3RWNHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
Note: This option uses the modular JavaScript SDK, which provides a reduced SDK size.

Learn more about Firebase for web: Get started, Web SDK API Reference, Samples



importScripts('https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.3/firebase-messaging.js');
firebase.initializeApp({
    // Insert firebase properties here
    apiKey: "AIzaSyC-ajvGhRM9i3qVwm-h-dJRKIa5-cLIaYE",
    authDomain: "egahak-7f6c0.firebaseapp.com",
    databaseURL: "https://egahak-7f6c0.firebaseio.com",
    projectId: "egahak-7f6c0",
    storageBucket: "egahak-7f6c0.appspot.com",
    messagingSenderId: "256559506462",
    appId: "1:256559506462:web:852a0c5d674e842d767a0f",
    measurementId: "G-2LXCZPPW4B"
});

const messaging = firebase.messaging();
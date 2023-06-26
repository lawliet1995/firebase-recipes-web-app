import firebase from "firebase";

const config = {
    apiKey: process.env.firebase_apiKey,
    authDomain: process.env.firebase_authDomain,
    projectId: process.env.firebase_projectId,
    storageBucket: process.env.firebase_storageBucket,
    messagingSenderId: process.env.firebase_messagingSenderId,
    appId: process.env.firebase_appId,
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default firebase;

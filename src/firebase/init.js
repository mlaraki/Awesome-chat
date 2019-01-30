import firebase from 'firebase'
import firestore from 'firebase/firestore'
var ok = 0
//Initialize Firebase
var config = {
    apiKey: "AIzaSyCVpQ5Z9iVkB6yw3pUnp_7zJbhRDSXyVI4",
    authDomain: "awesome-chat-c68e6.firebaseapp.com",
    databaseURL: "https://awesome-chat-c68e6.firebaseio.com",
    projectId: "awesome-chat-c68e6",
    storageBucket: "awesome-chat-c68e6.appspot.com",
    messagingSenderId: "238442269821"
  };
//   firebase.initializeApp(config);

// if(!firebase.apps.length){
//     console.log("good fb") 
//     ok+=1 ;
//     firebase.initializeApp(config)
//     const firebaseApp = firebase.initializeApp(config);
//     firebaseApp.firestore().settings({ timestampsInSnapshots : true })
// }else {
//    console.log("ERROR fb") 
// }

// const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots : true })

// export default firebaseApp.firestore() 

export default !firebase.apps.length
  ? firebase.initializeApp(config).firestore()
  : firebase.app().firestore();

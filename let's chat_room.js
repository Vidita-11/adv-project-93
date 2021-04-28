var firebaseConfig = {
      apiKey: "AIzaSyD5DTmtZQN1e8hmVV9QHDIK7SYVQ2Q6QAU",
      authDomain: "kwitter-46bd9.firebaseapp.com",
      projectId: "kwitter-46bd9",
      storageBucket: "kwitter-46bd9.appspot.com",
      messagingSenderId: "541048400200",
      appId: "1:541048400200:web:2092a8a28e382551a16b7d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

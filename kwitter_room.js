var firebaseConfig = {
      apiKey: "AIzaSyBT3CFusO3P6iY8SLFVemK4ZcZctJSoySg",
      authDomain: "kwitter-dd58e.firebaseapp.com",
      databaseURL: "https://kwitter-dd58e-default-rtdb.firebaseio.com",
      projectId: "kwitter-dd58e",
      storageBucket: "kwitter-dd58e.appspot.com",
      messagingSenderId: "5028224236",
      appId: "1:5028224236:web:213bcb3fb272ebb05dd9c9"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

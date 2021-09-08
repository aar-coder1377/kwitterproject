const firebaseConfig = {
    apiKey: "AIzaSyAN-tgAJ2W1_Kz4LD1p21BAjXeW8ylXlW0",
    authDomain: "kwitterapp-29564.firebaseapp.com",
    projectId: "kwitterapp-29564",
    storageBucket: "kwitterapp-29564.appspot.com",
    messagingSenderId: "241328383398",
    appId: "1:241328383398:web:02e9bd1a012e773500db67",
    measurementId: "G-9EF8QESB6Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code




                //End code
            }
        });
    });
}
getData();


// Initialize Cloud Firestore through Firebase
var firebaseConfig = {
    apiKey: "AIzaSyApitVKbH5_ZP9PKm902oRF3_BtA-MqZEM",
    authDomain: "cpe-123-car-game.firebaseapp.com",
    databaseURL: "https://cpe-123-car-game.firebaseio.com",
    projectId: "cpe-123-car-game",
    storageBucket: "cpe-123-car-game.appspot.com",
    messagingSenderId: "171248816383",
    appId: "1:171248816383:web:da60a651ce3c3babeffcca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


function addScore() {
    db.collection("scores").add({
        name: document.getElementById("name").value,
        score: parseInt(document.getElementById("score").value,10)
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    hideNameDialog();
}

function getScores() {
    scores = [];
    document.getElementById("scores").innerHTML = "";
    db.collection("scores").orderBy("score", "desc").limit(5).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            scores.push([doc.data().name, doc.data().score]);
            document.getElementById("scores").innerHTML += doc.data().name + ": " + doc.data().score + "<br>";
        });
    });
    console.log(scores);
    //return scores;
}

function showNameDialog() {
    score = parseInt(document.getElementById("score").value, 10);

    document.getElementById("scoreInput").innerHTML = score;
    document.getElementById("nameDialog").style.display = "block";
}

function hideNameDialog() {
    document.getElementById("nameDialog").style.display = "none";
}
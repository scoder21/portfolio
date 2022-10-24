window.onload = function() {
    const firebaseConfig = {
        apiKey: "AIzaSyD76aq-_xfKdVFCW8hnLRvecOVy6oeaAXE",
        authDomain: "portfolio-project-ee5dc.firebaseapp.com",
        projectId: "portfolio-project-ee5dc",
        storageBucket: "portfolio-project-ee5dc.appspot.com",
        messagingSenderId: "717486702758",
        appId: "1:717486702758:web:4b61b4215a240f068c7467",
        measurementId: "G-ENV6BVMN1W"
    };

    firebase.initializeApp(firebaseConfig);

    // Initialize Cloud Firestore 
    var db = firebase.firestore();

}

function uploadData() {
    let name = document.getElementById("contactinput_name").value;
    let email = document.getElementById("contactinput_email").value;
    let message = document.getElementById("contactinput_message").value;
    if ((name == null || name == " ") && (email == null && email == " ") && (message == null && message == " ")) {
    } else {
        alert(`name: ${name} email: ${email} message: ${message}`);
    }
    // db.collection("")
}
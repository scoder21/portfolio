window.onload = function() {
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyD76aq-_xfKdVFCW8hnLRvecOVy6oeaAXE",
        authDomain: "portfolio-project-ee5dc.firebaseapp.com",
        projectId: "portfolio-project-ee5dc",
        storageBucket: "portfolio-project-ee5dc.appspot.com",
        messagingSenderId: "717486702758",
        appId: "1:717486702758:web:4b61b4215a240f068c7467",
        measurementId: "G-ENV6BVMN1W"
    };
    
    // Initialize Firebase & Firestore
    firebase.initializeApp(firebaseConfig);
    let db = firebase.firestore();
    
    // Get the Project ID from the URL
    let parameters = new URLSearchParams(window.location.search);
    let projectId = parameters.get("p");
    
    // Get the project data from the database
    db.collection("projects").doc(projectId).get()
    .then(doc => {
        let title = doc.data().title;
        let description = doc.data().description;
        let tagList = doc.data().tags;
        let tags = "";
        let projectImage1 = doc.data().img1;
        let projectImage2 = doc.data().img2;

        tagList.forEach(tag => {
            tags += `<p>${tag}</p>`;
        });

        document.getElementById("projectTitle").innerHTML = title;
        document.title = `${title} | Stef Schalks`;
        document.getElementById("projectDescription").innerHTML = description;
        document.getElementById("tags").innerHTML = tags;
        document.getElementById("img1").src = projectImage1;
        document.getElementById("img2").src = projectImage2;

    });
}
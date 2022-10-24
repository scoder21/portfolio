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
        let bgimage = doc.data().imgbackground;


        console.log(bgimage);

        document.getElementById("bd-projectoverview").style.backgroundImage = 'linear-gradient(300deg, #92fe9d92 0%, #00c8ff92 33%, #92fe9d92 66%, #00c9ff92 100%), linear-gradient(300deg, #00000076 0%, #00000076 100%), url("' + bgimage + '")';
backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/portfolio-project-ee5dc.appspot.com/o/projectImages%2Fbackstage.png?alt=media&token=2915e2c3-99e7-48c8-b8ca-e6ae0176d1dd")'
        console.log(doc.data())
        tagList.forEach(tag => {
            tags += `<p>${tag}</p>`;
        });

        document.getElementById("projectTitle").innerHTML = title;
        document.title = `${title} | Stef Schalks`;
        document.getElementById("projectDescription").innerHTML = description;
        document.getElementById("tags").innerHTML = tags;

    });
}
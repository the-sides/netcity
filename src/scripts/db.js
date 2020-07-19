// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAUnwtc9M27Q3ADuOzCVlR2oNYTyyYAWCQ",
    authDomain: "pincity-3201a.firebaseapp.com",
    databaseURL: "https://pincity-3201a.firebaseio.com",
    projectId: "pincity-3201a",
    storageBucket: "pincity-3201a.appspot.com",
    messagingSenderId: "110962942512",
    appId: "1:110962942512:web:98bb6457c0c17d642c43f5"
};

const pntToCoord = (pnt) => {
    let lat = pnt.lat();
    lat = lat.toFixed(4);
    let lng = pnt.lng();
    lng = lng.toFixed(4);
    return {lat, lng}
}

// Query data helper
async function dataRequest(q) {
    let results = []
    await q.get()
        .then(
            function (dataSet) {
                dataSet.forEach(element => {
                    results.push(element.data())
                });
            })
        .catch(function (err) {
            console.error(err)
        })
    return results
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const getPins = () => {};

const postPin = (pnt, content, user = 'anon') => {
    // Add a new document with a generated id.
    const {lat, lng} = pntToCoord(pnt)
    db.collection("pins").add({
        lat: lat,
        lng: lng, 
        content: content,
        user: user, 
    })
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });
}

export { db, getPins, postPin }
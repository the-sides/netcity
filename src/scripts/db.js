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

// Query data helper
async function dataRequest(q){
    let results = []
    await q.get()
    .then(
        function(dataSet){
            dataSet.forEach(element => {
                results.push(element.data())
            });
        })
    .catch(function(err){
        console.error(err)
    })
    return results
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db, dataRequest}
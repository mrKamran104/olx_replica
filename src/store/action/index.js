import firebase from '../../config/firebase'
// import firebase from 'firebase'

const facebook_login = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                dispatch({ type: "log_in", data: result.user })
                // console.log(user)
                // ...
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

}


const firebase_logout = () => {
    return (dispatch) => {
        firebase.auth().signOut()
        .then(function () {
            // Sign-out successful.
            dispatch({ type: "log_out"})
        }).catch(function (error) {
            // An error happened.
        });

    }
}

let email_signup = (data)=>{
    firebase.auth().createUserWithEmailAndPassword(data.email, data.pass)
    .then(result=>{
        console.log(result)
    })
    .catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       alert(errorMessage)
       // ...
     });

}

let email_login = ()=>{
   var email = document.getElementById("login_email")
   var password = document.getElementById("login_pswrd") 
       firebase.auth().signInWithEmailAndPassword(email.value, password.value)
       .then(result=>{
           alert("user login successfuly")
           window.open("https://www.google.com" ,"_self" )
       })
       .catch(function(error) {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       alert(errorMessage)

       // ...
     });
}





const set_data = (data) => {
    return (dispatch) => {
        dispatch({ type: "user_name", data: data })
    }
}

export {
    set_data,
    facebook_login,
    firebase_logout,
    email_signup
}
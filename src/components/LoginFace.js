import React, { Component } from 'react';
import firebase from 'firebase';
import './Login.css';

class LoginFacebook extends Component {
    constructor(){
        super();
        this.state={
            user:null
        }
    }
    componentWillMount(){
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({
                user:user
            })
        })
    }
handleFacebooklogin =()=>{
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} Ya se encuentra iniciada la sesión`))
    .catch(error => console.log(error))

}
handleFacebooklogout=()=>{
    firebase.auth().signOut()
    .then(result => console.log(`${result.user} su sesion ha finalizado`))
    .catch(error => console.log(error))

}


autentification =()=>{
    if(this.state.user){
        return(
            <div className="button-close">
            <button onClick={this.handleFacebooklogout}>Salir</button>
            </div>
        )
    }else{
        return( 
            <div className="button-face">
                <div className="image">
                    <img src="./components/Assets/bicicleta.jpg" alt=""/>
                </div>
            <button type="button" class="btn btn-primary btn-md" onClick={this.handleFacebooklogin}>Facebook</button>
            </div>
        )
    }

}
    
    render(){
        return( 
            <div className = "LoginFacebook">
             <p>
              { this.autentification() }
             </p>
            </div>

        )
    }
}

export default LoginFacebook;
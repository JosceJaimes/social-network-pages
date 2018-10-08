import React, { Component } from 'react';
import firebase from 'firebase'
import { auth } from '../credentials';
import { Redirect, whitRouter } from 'react-router-dom'
import './Login.css';

class LoginFacebook extends Component {
    constructor(){
        super();
        this.state={
            user:null
        }
    }
    componentWillMount(){
        auth.onAuthStateChanged(user =>{
            this.setState({
                user})
        })
    }
handleFacebooklogin =(user)=>{
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} Ya se encuentra iniciada la sesión`))
    .catch(error => console.log(error))

}
handleFacebooklogout=()=>{
    auth.signOut()
    .then(result => console.log(`${result.user} su sesion ha finalizado`))
    .catch(error => console.log(error))

}



autentification =(user)=>{
    if(this.state.user){
        return(
            <div className="button-close">
            <button onClick={this.handleFacebooklogout}>Salir</button>
            </div>
        )
    }else{
        return( 
            <div className="button-face">
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
import React, { Component } from 'react';
import firebase from 'firebase'
import { config } from '../credentials';
import 'firebase/auth'
// import { Redirect } from 'react-router-dom'
import LoginFacebook from './LoginFace'
import LoginGoogle from './LoginGoogle';
// import { app } from './Autentification';

class Autentification extends Component {
    constructor(){
        super();
        this.state = { 
            'name':'',
            'email':'', 
            'password':''
         };

    }
    login=()=>{
        const auth = firebase.auth();
        config.auth().createUserWithEmailAndPassword(auth)
        .then(rest => console.log(`${rest}`))
        .catch(error => console.log(error))
    }




    register = (e) =>{
        const {value, name} = e.target;
        this.setState({
            [name] : value
        });
        console.log(this.state);         
    }
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                      <input type="text" 
                        placeholder="Ingrese su nombre" 
                        className = "form-control" 
                        name="name"
                        onChange= {this.register}
                       />
                    </div>
                    <div className="form-group">
                       <input type="text" 
                         placeholder="Ingrese su email" 
                         className = "form-control" 
                         name="email"
                         onChange= {this.register}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" 
                          placeholder="Ingrese su contraseña" 
                          className = "form-control" 
                          name="password"
                          onChange={ this.register }
                          />
                    </div>
                    <div>
                        <button  className="btn btn-success"onClick={this.register}>Registrarse</button>
                    </div>
                    <LoginGoogle />
                    <LoginFacebook />
                </div>

            </div>
        )
    }

}

export default Autentification;

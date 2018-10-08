import React, { Component} from 'react';
import LoginFacebook from './LoginFace'
import LoginGoogle from './LoginGoogle'
import './SingUp.css'

class SingUp extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <div className="cardSingup">
        <div className="formSingup">
          <div>
            <input type="text" placeholder="Ingresa tu correo"/>
          </div>

        <div>
          <input type="password" placeholder="Ingresa tu contraseña"/>
        </div>
        <button>Ingresar</button>
        <LoginGoogle />
        <LoginFacebook />
        </div>
      </div>
    )
  }
}


export default SingUp;
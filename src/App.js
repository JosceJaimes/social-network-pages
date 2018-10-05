import React, { Component } from 'react';
import Autentification from './components/Autentification'
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
        <img src="https://github.com/JosceJaimes/social-network-pages/blob/master/src/components/Assets/bicicleta.jpg" alt=""/>
        </div>
        <div className="App-body">
          <div className="form-group">
          <h2>Únete a nuestra comunidad de Mujeres Bikers en la Ciudad de México</h2>
          <Autentification />
          </div>
        </div>
        <div className="App-footer">
        <p class="mt-5 mb-3 text-muted">© sororiGirls</p>
        </div>
        <div className="App-lateral">

        </div>

      </div>
    )
  }
}



// class App extends Component {
//   constructor(){
//     super();
//     this.state ={
//       user: null,
//     };
//     this.handleAuth = this.handleAuth.bind(this);
//     this.handleLogouth = this.handleLogouth.bind(this);
//   }
//   componentWillMount(){
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({
//         user: user
//       }); 
//     })
//   }
//   handleAuth(){
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//     .then(result => console.log(`${result.email} ha iniciado sesion`))
//     .catch(error => console.log(error)
//     )
//   }
//   handleLogouth(){
//     firebase.auth().signOut()
//     .then(result =>console.log(`${result.user.email} ha finalizado sesion`))
//     .catch(error => console.log(error))
//   }
// renderLoginButton(){
//   if(this.state.user){
// return(
//   <div>
//     <img src={ this.state.user.photoURL} alt={ this.state.user.displayName} />
//     <p>Bienvenido {this.state.user.displayName}!</p>
//     <button onClick={this.handleLogouth}>Salir</button>
//     <FileUpload />
//   </div>
// )
//   }else{
//     return(
//       <button onClick={this.handleAuth}>Google</button>
//      )

//   }

// }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Bienvenido tu red social</h1>
//         </header>
//         <p className="App-intro">
//           { this.renderLoginButton() }
//         </p>
//       </div>
//     );
//   }
// }



export default App;




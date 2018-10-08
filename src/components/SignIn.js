import React, { Component } from 'react';
import { auth } from '../credentials'
import './SingIn.css'

class SingIn extends Component{
    constructor(){
        super();
        this.state={
            user:[]
    }
    }
    // componentWillMount(user){
    //     this.setState({user})
    // }
    register=(user)=>{

    }
    handleChange=(e)=>{
        this.setState({[e.target.name]: e.target.value}).push(user)
    }
    
    render(){
        return(
            <div className= "cardSingIn">
                <div className= "headerSingIn">

                </div>
                <div className="bodySingIn">
                    <input type="text" name="name" onChange={(e)=>this.handleChange(e)} placeholder="Ingrese su nombre"/>
                    <input type="text" name="email" onChange={(e)=>this.handleChange(e)} placeholder="Ingrese su email"/>
                    <input type="password" name="password" onChange={(e)=>this.handleChange(e)} placeholder="Ingrese su password"/>
                    <button onClick={this.register}>Registrarse</button>
                </div>
                <div className="footerSingIn">

                </div>

            </div>
        )
    }
}
export default SingIn;






// class SingIn extends Component{
//   constructor(){
//       super();
//       this.state={
//         user:{
//           email:'',
//           password:'',
//           name:'',
//         }
//       }
//     }
//     //   componentWillMount(user){ 
//     //     if(user){
//     //   this.setState({user})
//     //     }
//     // }
    
//       register=(email, password)=>{

//         console.log(email, password)
//         auth.createUserWithEmailAndPassword(email, password)
//         console.log(email, password)
//         // .then(result =>{
//         //   console.log(result);
//         // })
//         // .catch(error =>console.log(error));
//       }
//       handleChange=(event)=>{
//           this.setState({user:event.target});    
//       } 
//     //   handleChange=(value, name)=>{
//     //     console.log(value, name)
//     //     // const { value, name }= e.target;
//     //     this.setState({
//     //       [name] : value,
          
          
//         // })

//     //   }
//       handleSubmit=(e)=>{
//         e.preventDefault();
//         this.setState({
//           name:'',
//           email:'',
//           password:'',
//         })
//       }
//   render(){
//       return(
        
//           <div className="card">
//                   <div onSubmit={ this.handleSubmit } className="card-body">
//                       <div onSubmit={ this.handleSubmit } className="form-group">
//                           <input type="text" name="name" onChange={this.handleChange}/>
//                       </div>
//                   </div>
//               <div>
//                   <div>
//                       <div>
//                           <input type="email" name="email" onChange={this.handleChange}/>
//                       </div>
//                   </div>
//               </div>
//               <div>
//                   <div>
//                       <div>
//                           <input type="password" name="password" onChange={this.handleChange}/>
//                       </div>
//                   </div>
//               </div>
//               <div>
//               <button onClick={this.register}>Registar</button>

//               </div>
//           </div>
//       )
//   }
// }

// export default SingIn;
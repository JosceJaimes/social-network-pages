import React, { Component } from 'react';


class FormPost extends Component{
    constructor(){
        super();
        this.state ={

        }
    }
    addPost=()=>{
        console.log(this.textInput.value);
        this.props.addPost(this.textInput.value)
        this.textInput.value='';
        this.textInput.focus();        
    }
    render(){
        return(
            <div className= "postForm">
                <input 
                ref = {input => {this.textInput = input;}}
                placeholder="Que estas pensando"
                type="text"
                />
                <button onClick={this.addPost}>
                    Añadir comentario
                </button>
            </div>
        )
    }

}
export default FormPost;



// linea 19 con el this.textinput nos va a permitir manipular desde el metodo addPost
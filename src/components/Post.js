import React, { Component } from 'react';


class Post extends Component{
    constructor(props){
        super(props);
    }
    handleRemove(postId){
        const response = window.confirm('Deseas eliminar este comentario')
        if(response){
            this.props.removePost(postId);
        }
        return;
    }
    render(){
        return(
            <div className="Post">
                <p>{this.props.postContent}</p>
                <button onClick={()=> {this.handleRemove(this.props.postId)}}>Borrar</button>
            </div> 
        )
    }
}

export default Post;


// // linea 14 estamos accediendo a las propiedades llamada en constructor y super
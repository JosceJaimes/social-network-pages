import React, {Component } from 'react';
import { Redirect } from 'react-router-dom'
import { config } from '../credentials'
import 'firebase/database'
import Post from './Post'
import './Muro.css'
import FormPost from './FormPost';
import Autentification from './Autentification'



class Muro extends Component{
    constructor(){
        super();
        this.state ={
            posts:[
                
            ]

        };
        // this.app = firebase.initializeApp(Credentials)
        // this.d
        this.db = config.database().ref().child('comments');//conexion a la base de datos.
    }
    componentDidMount(){ //se ejecuta despues de la vista, encargado de cargar los datos al estado
        const { posts } = this.state;
        this.db.on('child_added', snap =>{
            posts.push({
                postId: snap.key,
                postContent : snap.val().postContent
            })
            this.setState({posts})
        })
        this.db.on('child_removed', snap =>{
            for (let i=0; i<posts.length; i++){
                if(posts[i].postId = snap.key){
                    posts.splice(i, 1);
                }
            }
            this.setState({posts})
        })

    }
    removePost=(postId)=>{
        this.db.child(postId).remove();
    }
    addPost=(post)=>{
        this.db.push().set({postContent: post})
    }
    render(){
        if(this.state.user){ 
        return(
            <div className= "postContainer">
            <div className= "postHeader">
                <h2>Bienvenida!</h2>
            </div>
            <div className= "postBody">
                {this.state.posts.map(post =>{
                    return( 
                        <Post 
                         postContent = {post.postContent}
                         postId ={post.postId}
                         key = {post.postId}
                         removePost={this.removePost}
                        />
                    )
                    

                })}
                <FormPost addPost={this.addPost}/>
            </div>
            <div className= "postfooter">

            </div>
            </div>
            
        )} else{
            return(
                <Redirect to='./'/>
            )
        }
    }

}
export default Muro;


//linea 31 se le estan pasando las propiedades solicitadas desde Post.
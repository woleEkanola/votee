import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import {auth} from '../firebase'

import { Link, Redirect} from "react-router-dom";


class SignUp extends Component {
  constructor(props){
    super(props)

    this.state= {
        email: 'dd',
        password:'',
        signedIn: false
    }

 this.auth = auth
   
  }

  signUp= e =>{
      e.preventDefault()

      let email = this.state.email
      let password = this.state.password


if(email && password){

    this.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // ...

         console.log(errorMessage)
       });
}
this.setState({signedIn: true})

  }

  handleChange = e =>{
    let text = e.target.value
    let prop = e.target.name
    this.setState({[prop]: text})
    
      }

    componentDidMount(){
      let that = this

      this.auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          that.setState({signedIn: true})
        } 
      });
    }


  render() {
   
   
    return (
      <Container>
      
      {
        this.state.signedIn ? <Redirect to= '/' /> :   
        <Row>
            <h1> Create a new account </h1>
            <p> Already have an account <Link to= '/sign-in'> Click here</Link> to sign in </p>

      <form className="form-signin" onSubmit={this.signUp}  >
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name='email' onChange={this.handleChange} required autoFocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" name='password' onChange={this.handleChange} required />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit" >Register</button>
        <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
      </form>
    </  Row>
      }
      </Container>


    );
  }
}

export default SignUp;

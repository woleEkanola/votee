import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';
import {auth} from '../firebase'

import { Link, Redirect } from "react-router-dom";


class SignIn extends Component {
  constructor(props){
    super(props)

    this.state= {
      email: 'dd',
      password:'',
      signedIn: false
  }

this.auth = auth
   
  }

  signIn= e =>{
    e.preventDefault()

    let email = this.state.email
    let password = this.state.password


if(email && password){

  this.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
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
        <h1> Sign in to your  account </h1>

        <p> to create a new account <Link to= '/sign-up'> Click here</Link> </p>

      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
      </form>
    </  Row>

          }
      </Container>


    );
  }
}

export default SignIn;

import React, { Component } from 'react';
import '../App.css';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
Row } from 'reactstrap';

import {auth} from '../firebase'

import VoteHeader from '../components/VoteHeader'
import Comment from '../components/Comment'

import { Link } from "react-router-dom";


class Home extends Component {

    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
        signedIn: false
      };

      this.auth = auth
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    componentDidMount(){
      let that = this

      this.auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          that.setState({
            signedIn: true,
            user: user.email
          })
           
        } 
      });
    }
signOut = () =>{

  alert('ready to sign out')
  this.auth.signOut()
}

  render() {
   let that = this 
   
    return (
 <Container> 
    <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Votee</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About Votee</NavLink>
              </NavItem>
              {
                this.state.signedIn ? <NavItem>
            
                <NavLink onClick={that.signOut} >Sign Out</NavLink>
              </NavItem>

              :

              <NavItem>
            
                <NavLink href="/sign-in">Sign In</NavLink>
              </NavItem>
              }
           
           {
                this.state.signedIn ? <NavItem>
            
                <NavLink >{this.state.user}</NavLink>
              </NavItem>

              :
<NavItem>
            
            <NavLink href="/sign-up">Sign Up</NavLink>
          </NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>
        <Row> 

          <VoteHeader />

        </Row>
        <Row>
          <Comment />
          <Comment />
          <Comment />
          <Comment />

          </Row>
 </Container>

    );
  }
}

export default Home;

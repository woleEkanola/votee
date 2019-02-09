import React, {Component} from 'react'

import { Link } from "react-router-dom";

const About = props =>{
    return <div>
    <nav>
    <Link to='/about' > About</Link>             </nav>
    <h1> Hello from About Page </h1>
    </div>
}


export default About
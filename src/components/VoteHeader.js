import React, {Component} from 'react'

import {

  Row } from 'reactstrap';

  import VoteCard from './VoteCard'


 const VoteHeader = (props) =>{
   
return <Row>
<VoteCard />
<VoteCard />
<VoteCard />

    </Row>
}

export default VoteHeader
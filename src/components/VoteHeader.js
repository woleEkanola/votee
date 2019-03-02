import React, {Component} from 'react'

import {

  Row } from 'reactstrap';

  import VoteCard from './VoteCard'


 const VoteHeader = (props) =>{
     let votees = props.votes ? props.votes : []
    

 const  renderVotes =votees.map(vote =>{
        return <VoteCard key={vote.Description} vote= {vote}  canVote={props.canVote} />

    })
   
return <Row>
{renderVotes}

    </Row>
}

export default VoteHeader
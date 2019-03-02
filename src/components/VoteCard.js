import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button , Col} from 'reactstrap';

const VoteCard = (props) => {
  return (
    <Col xs="6" sm="4">
      <Card>
        <CardImg top width="100%" src={props.vote.img} alt="Card image cap" />
        <CardBody>
          <CardTitle> {props.vote.count} Votes</CardTitle>

{
  props.canVote ? 
    <Button color='primary'  >Vote</Button> :
    <Button color='secondary'  >Vote</Button>


}        </CardBody>
      </Card>
    </Col>
  );
};

export default VoteCard;

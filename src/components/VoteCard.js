import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button , Col} from 'reactstrap';

const VoteCard = (props) => {
  return (
    <Col xs="6" sm="4">
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle> 567 Votes</CardTitle>
          <Button>Vote</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VoteCard;

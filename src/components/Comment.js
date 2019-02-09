import React from 'react';
import { Media } from 'reactstrap';

const Comment = () => {
  return (
    <Media>
      <Media left href="#">
        <Media object data-src="" alt="user image" />
      </Media>
      <Media body>
        <Media heading>
Olanrewaju Adamu Chibike        
</Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  );
};

export default Comment;
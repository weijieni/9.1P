import React from 'react';
import {Card} from 'semantic-ui-react';

  
const Items = [
        {
            image: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg',
            header: 'Elliot Baker',
            meta: 'Requester',
            description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        },
        {
            image: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg',
            header: 'Elliot Baker',
            meta: 'Requester',
            description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        },
        {
            image: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg',
            header: 'Elliot Baker',
            meta: 'Requester',
            description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        },
        {
            image: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg',
            header: 'Elliot Baker',
            meta: 'Requester',
            description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        },
        {
            image: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg',
            header: 'Elliot Baker',
            meta: 'Requester',
            description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        },
        {
            image: 'https://react.semantic-ui.com/images/avatar/large/elliot.jpg',
            header: 'Elliot Baker',
            meta: 'Requester',
            description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        },
    ]

  const CardItem = () => <Card.Group items={Items} />
  
export default CardItem;
  
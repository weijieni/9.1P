import React from 'react';
import {Card} from 'semantic-ui-react';
import Facker from 'faker';

  
const Items = [
        {
            image: Facker.internet.avatar(),
            header: Facker.internet.userName(),
            meta: 'Requester',
            description: Facker.lorem.paragraph()
        },
        {
            image: Facker.internet.avatar(),
            header: Facker.internet.userName(),
            meta: 'Requester',
            description: Facker.lorem.paragraph()
        },
        {
            image: Facker.internet.avatar(),
            header: Facker.internet.userName(),
            meta: 'Requester',
            description: Facker.lorem.paragraph()
        },
        {
            image: Facker.internet.avatar(),
            header: Facker.internet.userName(),
            meta: 'Requester',
            description: Facker.lorem.paragraph()
        },
        {
            image: Facker.internet.avatar(),
            header: Facker.internet.userName(),
            meta: 'Requester',
            description: Facker.lorem.paragraph()
        },
        {
            image: Facker.internet.avatar(),
            header: Facker.internet.userName(),
            meta: 'Requester',
            description: Facker.lorem.paragraph()
        },
    ]

  const CardItem = () => <Card.Group items={Items} />
  
export default CardItem;
  
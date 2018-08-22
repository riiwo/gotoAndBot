import React from 'react';

import { BotIcon } from './BotIcon';
import { Title } from './Text';

export const Header = (props) => {
  return (
    <div className="header">
      <BotIcon />
      <div className="title-wrapper">
        <Title>gotoAndBot</Title>
      </div>
    </div>
  );
}

import React from 'react';
import { BotIcon } from './BotIcon';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sanitizeHtml from 'sanitize-html';

export const Message = (props) => {
  const timestamp = new Date(props.timestamp).toLocaleTimeString();
  const readableTimestamp = timestamp.substring(0, timestamp.length - 3);

  const message = sanitizeHtml(props.message, {
    allowedTags: ['b', 'i', 'em', 'strong', 'br'],
    allowedAttributes: {}
  });

  return (
    <div className={`row ${props.recipient}`}>
      <ImageColumn {...props} />
      <div className="message-column ">
        <div className="info-row">
          <div className="info-name">
            { props.recipient === 'user' ? 'Me' : 'gotoAndBot' }
          </div>
          <div className="info-time">
            { readableTimestamp }
          </div>
        </div>
        {
          props.message ?
            <div className="message-box"
                 dangerouslySetInnerHTML={{ __html: message }} /> :
            <div className="message-box">
              <FontAwesomeIcon icon="spinner" className="fa-spin"/>
            </div>
        }
      </div>
    </div>
  )
}

const ImageColumn = ({ recipient }) => {
  if (recipient === 'bot') {
    return (
      <div className="image-column">
        <BotIcon />
      </div>
    );
  }
  return null;
}


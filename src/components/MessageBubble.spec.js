import React from 'react';
import { shallow } from 'enzyme';

import MessageBubble from './MessageBubble';

describe('MessageBubble', () => {
  let component;
  let author;
  let message;
  let timestamp;
  let isOwn;

  beforeEach(() => {
    author = 'Bugs Bunny';
    message = 'Whats up doc?';
    timestamp = '12.12.2012';
    isOwn = true;
    component = shallow(<MessageBubble
      author={author}
      message={message}
      timestamp={timestamp}
      isOwn={isOwn}
    />);
  });

  describe('when the message is own', () => {
    it('should display that the message as own', () => {
      expect(component.getElement()).toMatchSnapshot();
    });
  });

  describe('when the message is not own', () => {
    it('should display that the message as not own', () => {
      component.setProps({ isOwn: false });

      expect(component.getElement()).toMatchSnapshot();
    });
  });
});

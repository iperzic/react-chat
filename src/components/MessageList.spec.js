import React from 'react';
import { shallow } from 'enzyme';

import MessageList from './MessageList';

describe('MessageList', () => {
  let component;
  let messages;

  describe('when there are no messages', () => {
    beforeEach(() => {
      messages = [];
      component = shallow(<MessageList
        messages={messages}
      />);
    });

    it('should not display any messages', () => {
      expect(component.getElement()).toMatchSnapshot();
    });
  });

  describe('when there are messages provided', () => {
    beforeEach(() => {
      messages = [{
        id: 'abc', author: 'Bugs Bunny', message: 'Whats up doc?', timestamp: 'some timestamp', isOwn: true,
      }, {
        id: 'abcd', author: 'Foo', message: 'Bar', timestamp: 'Baz', isOwn: false,
      }];
      component = shallow(<MessageList
        messages={messages}
      />);
    });

    it('should display messages', () => {
      expect(component.getElement()).toMatchSnapshot();
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import Chat from './Chat';

describe('Chat', () => {
  let component;
  let messageSendSpy;
  let chatLoadSpy;
  let messages;
  let isLoading;

  beforeEach(() => {
    messageSendSpy = jest.fn();
    chatLoadSpy = jest.fn();
    isLoading = false;
    messages = [{
      id: 'abc', author: 'Bugs Bunny', message: 'Whats up doc?', timestamp: 'some timestamp', isOwn: true,
    }, {
      id: 'abcd', author: 'Foo', message: 'Bar', timestamp: 'Baz', isOwn: false,
    }];
    component = shallow(<Chat
      messages={messages}
      onNewMessage={messageSendSpy}
      onChatLoad={chatLoadSpy}
      isLoading={isLoading}
    />);
  });

  it('should display all provided messages with a new message', () => {
    expect(component.getElement()).toMatchSnapshot();
  });

  it('should call the onChatLoad prop when a component is mounted', () => {
    expect(chatLoadSpy).toHaveBeenCalled();
  });

  describe('when page is loading', () => {
    it('should display the loading screen', () => {
      component.setProps({ isLoading: true });
      expect(component.getElement()).toMatchSnapshot();
    });
  });
});

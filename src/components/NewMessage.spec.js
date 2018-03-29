
import React from 'react';
import { shallow } from 'enzyme';

import NewMessage from './NewMessage';

describe('NewMessage', () => {
  let component;
  let messageSendSpy;

  beforeEach(() => {
    messageSendSpy = jest.fn();
    component = shallow(<NewMessage onMessageSend={messageSendSpy} />);
  });

  it('should show an input for message and a send button', () => {
    expect(component.getElement()).toMatchSnapshot();
  });

  describe('when the send message button is clicked', () => {
    it('should call the onMessageSend prop with the message', () => {
      const message = 'Whats up doc?';
      const messageInput = component.find('input');
      const sendButton = component.find('button');

      messageInput.simulate('change', {
        currentTarget: {
          value: message,
        },
      });
      sendButton.simulate('click');

      expect(messageSendSpy).toHaveBeenCalledWith(message);
    });
  });
});

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

  describe('when there is no text in the input', () => {
    it('should show an input for message and a disabled send button', () => {
      expect(component.getElement()).toMatchSnapshot();
    });

    it('should not call the onMessageSend prop', () => {
      const sendButton = component.find('button');

      sendButton.simulate('click');

      expect(messageSendSpy).not.toHaveBeenCalled();
    });
  });

  describe('when there is text in the input', () => {
    let message;
    beforeEach(() => {
      message = 'Whats up doc?';
      component.setState({ message });
    });

    it('should show an input for message and a send button', () => {
      expect(component.getElement()).toMatchSnapshot();
    });

    it('should call the onMessageSend prop with the message', () => {
      const messageInput = component.find('.NewMessage__input');
      const form = component.find('.NewMessage__container');

      messageInput.simulate('change', {
        currentTarget: {
          value: message,
        },
      });
      form.simulate('submit', {
        preventDefault: () => {
        },
      });

      expect(messageSendSpy).toHaveBeenCalledWith(message);
    });
  });
});

import * as actions from './messages';
import * as msgTypes from './messages.const';

describe('messages actions', () => {
  describe('#getMessages()', () => {
    it('should fetch messages', () => {
      const expectedAction = {
        type: msgTypes.GET_MESSAGES,
      };

      expect(actions.getMessages()).toMatchObject(expectedAction);
    });
  });

  describe('#getMessagesSuccess()', () => {
    it('should return messages data fetched', () => {
      const data = [];
      const expectedAction = {
        type: msgTypes.GET_MESSAGES_SUCCESS,
        payload: { data },
      };

      expect(actions.getMessagesSuccess(data)).toMatchObject(expectedAction);
    });
  });

  describe('#getMessagesFailure()', () => {
    it('should handle thrown get messages error', () => {
      const message = 'some error';
      const error = { message };
      const expectedAction = {
        type: msgTypes.GET_MESSAGES_FAILURE,
        message,
      };

      expect(actions.getMessagesFailure(error)).toMatchObject(expectedAction);
    });
  });

  describe('#sendMessage(message)', () => {
    it('should send new message', () => {
      const message = 'some message';
      const expectedAction = {
        type: msgTypes.SEND_MESSAGE,
        payload: { message },
      };

      expect(actions.sendMessage(message)).toMatchObject(expectedAction);
    });
  });

  describe('#sendMessageSuccess()', () => {
    it('should return new message', () => {
      const expectedAction = {
        type: msgTypes.SEND_MESSAGE_SUCCESS,
      };

      expect(actions.sendMessageSuccess()).toMatchObject(expectedAction);
    });
  });

  describe('#sendMessageFailure()', () => {
    it('should handle thrown send message error', () => {
      const message = 'some error';
      const error = { message };
      const expectedAction = {
        type: msgTypes.SEND_MESSAGE_FAILURE,
        message,
      };

      expect(actions.sendMessageFailure(error)).toMatchObject(expectedAction);
    });
  });
});

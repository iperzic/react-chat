import * as actions from './messages';
import * as msgTypes from './messages.const';

describe('messages actions', () => {
  describe('#getMessages()', () => {
    it('should return messages data fetched', () => {
      const expectedAction = {
        type: msgTypes.GET_MESSAGES,
      };

      expect(actions.getMessages()).toMatchObject(expectedAction);
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
});

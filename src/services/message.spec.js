import * as api from './message';

describe('message API', () => {
  describe('GET', () => {
    let messages;
    beforeEach(() => {
      messages = [{
        id: 'abc', author: 'Bugs Bunny', message: 'Whats up doc?', timestamp: 'Thu Mar 15 2018', isOwn: false,
      }];
      global.fetch = jest.fn().mockImplementation(() => new Promise(resolve => resolve({
        json: () => messages,
      })));
    });

    it('#getMessages()', () => {
      api.getMessages().then((response) => {
        expect(response).toBe(messages);
      });
    });
  });

  describe('POST', () => {
    let message;
    beforeEach(() => {
      message = 'some message';
      global.fetch = jest.fn().mockImplementation(() => new Promise(resolve => resolve({
        json: () => message,
      })));
    });

    it('#sendMessage()', () => {
      api.sendMessage(message).then((response) => {
        expect(response).toBe(message);
      });
    });
  });
});

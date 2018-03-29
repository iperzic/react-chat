import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import App from './App';
import TestStore from '../support/store';

describe('App', () => {
  let store;
  beforeEach(() => {
    store = configureStore()(TestStore.createMessagesStore());
  });

  describe('when the there are no messages', () => {
    beforeEach(() => {
      store = configureStore()(TestStore.createMessagesStore());
    });
    it('should show empty input and empty message list', () => {
      const appContainer = shallow(<App store={store} />).dive();

      expect(appContainer.getElement()).toMatchSnapshot();
    });
  });

  describe('when the there are messages', () => {
    beforeEach(() => {
      store = configureStore()(TestStore.createMessagesStore(undefined, undefined, [{
        id: 'abc', author: 'Bugs Bunny', message: 'Whats up doc?', timestamp: 'Thu Mar 15 2018', isOwn: false,
      }]));
    });
    it('should show empty input and message list', () => {
      const appContainer = shallow(<App store={store} />).dive();

      expect(appContainer.getElement()).toMatchSnapshot();
    });
  });
});

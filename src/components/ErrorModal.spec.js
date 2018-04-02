import React from 'react';
import { shallow } from 'enzyme';

import ErrorModal from './ErrorModal';

describe('ErrorModal', () => {
  let component;
  let message;

  beforeEach(() => {
    message = 'An error has occurred';
    component = shallow(<ErrorModal
      message={message}
    />);
  });

  it('should display the error modal with provided text', () => {
    expect(component.getElement()).toMatchSnapshot();
  });
});

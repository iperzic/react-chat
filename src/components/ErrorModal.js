import React from 'react';
import PropTypes from 'prop-types';

import './ErrorModal.css';

const ErrorModal = ({ message }) => (
  <div className="Modal">
    <div className="modal-content">
      {message}
    </div>
  </div>
);

ErrorModal.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorModal;

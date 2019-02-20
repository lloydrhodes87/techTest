import React from 'react';

const Err = props => {
  const { status, statusText } = props.err.response;
  const { goBackFromError } = props;
  return (
    <div className="error">
      <p>Error</p>
      <p>{status}</p>
      <p>{statusText}</p>
      <button className="button" onClick={goBackFromError}>
        Back
      </button>
    </div>
  );
};

export default Err;

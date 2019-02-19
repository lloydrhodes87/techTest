import React from 'react';

const Err = props => {
  return (
    <div>
      <p>Error</p>
      <p>{props.err}</p>
    </div>
  );
};

export default Err;

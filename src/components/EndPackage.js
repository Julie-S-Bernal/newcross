import React from 'react';
import Paper from 'material-ui/Paper';
import EndPackageDate from './EndPackageDate';


const EndPackage = (props) => {
  const { endValue, handleEndChange } = props;
  return (
      <EndPackageDate endValue={endValue} handleEndChange={handleEndChange} />
  );
};

export default EndPackage;
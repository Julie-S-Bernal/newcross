import React from 'react';
import EndPackageDate from './EndPackageDate';


const EndPackage = (props) => {
  const { endValue, handleEndChange } = props;
  return (
      <EndPackageDate endValue={endValue} handleEndChange={handleEndChange} />
  );
};

export default EndPackage;
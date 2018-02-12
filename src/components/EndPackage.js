import React from 'react';
import Paper from 'material-ui/Paper';
import EndPackageDate from './EndPackageDate';


const EndPackage = (props) => {
  const { endValue, handleEndChange } = props;
  return (
    // <Paper>
      <EndPackageDate endValue={endValue} handleEndChange={handleEndChange} />
    // </Paper>
  );
};

export default EndPackage;
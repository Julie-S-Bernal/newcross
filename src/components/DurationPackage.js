import React from 'react';
import Paper from 'material-ui/Paper';
import DurationPackageDate from './DurationPackageDate';


const DurationPackage = (props) => {
  const { dateValue, handleDateChange } = props;
  return (
   
      <DurationPackageDate dateValue={dateValue} handleDateChange={handleDateChange} />
  
  );
};

export default DurationPackage;

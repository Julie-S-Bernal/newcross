import React from 'react';
import Paper from 'material-ui/Paper';
import StaffGenderRadio from './StaffGenderRadio';


const StaffGender = (props) => {
  const { staffValue, handleStaffChange } = props;
  return (
      <StaffGenderRadio staffValue={staffValue} handleStaffChange={handleStaffChange} />
  );
};

export default StaffGender;
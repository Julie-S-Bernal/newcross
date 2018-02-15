import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';


class DurationPackageDate extends React.Component{

  render(){
    const{classes, dateValue, handleDateChange } = this.props;
    return (
      <TextField
       fullWidth
        value={dateValue}
        onChange={handleDateChange}
        label=""
        type="date"
      />
    );
  }
}
      
      
export default (DurationPackageDate);
      

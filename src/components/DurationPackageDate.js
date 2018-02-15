import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';


class DurationPackageDate extends React.Component{

  render(){
    const{classes, dateValue, handleDateChange } = this.props;
    return (
 
      <TextField  style={{ borderRight: '0.4vh solid grey', padding: '1vh', paddingLeft:'8vw' }}
        value={dateValue}
        onChange={handleDateChange}
        label=""
        type="date"
      />

    );
  }
}
      
      
export default (DurationPackageDate);
      

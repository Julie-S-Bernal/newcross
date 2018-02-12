import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { DatePicker } from 'material-ui-pickers';
import {ArrowBack, ArrowForward}  from 'material-ui-icons';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class DurationPackageDate extends React.Component{
  propTypes = {
    classes: PropTypes.object.isRequired,
  };


  render() {

    const {classes, dateValue, handleDateChange} = this.props;
    console.log(dateValue)
    return (
      <TextField
        id="date"
        value={dateValue}
        onChange={handleDateChange}
        label=""
        type="date"
        leftArrowIcon={<ArrowBack />}
        rightArrowIcon={<ArrowForward />}
        // I need to code a reverse here because the default date will be the oppositve
        // of what I want
        InputLabelProps={{
          shrink: true,
        }}
      />
  );
}

}


export default withStyles(styles)(DurationPackageDate);

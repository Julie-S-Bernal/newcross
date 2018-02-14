import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { DatePicker } from 'material-ui-pickers';


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
  render(){

    const{classes, dateValue, handleDateChange } = this.props;
    return (
      <TextField
        value={dateValue}
        onChange={handleDateChange}
        label=""
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
    );
  }
}
      
      
export default withStyles(styles)(DurationPackageDate);
      

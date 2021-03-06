import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControl, FormControlLabel } from 'material-ui/Form';


const styles = theme => ({
 
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class StaffGenderRadio extends React.Component {
    propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const{classes, staffValue, handleStaffChange} = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <RadioGroup
            required
            row
            className={classes.group}
            value={staffValue}
            onChange={handleStaffChange}
          >
            <FormControlLabel value="None" control={<Radio />} label="none" />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(StaffGenderRadio);


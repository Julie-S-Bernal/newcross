import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class EndPackageDate extends React.Component {
    propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const{classes, endValue, handleEndChange } = this.props;
    console.log(endValue);

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            className={classes.group}
            value={endValue}
            onChange={handleEndChange}
          >
            <FormControlLabel value="Ongoing" control={<Radio />} label="none" />
            <FormControlLabel value="specific" control={<Radio />} label="Specific" />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(EndPackageDate);
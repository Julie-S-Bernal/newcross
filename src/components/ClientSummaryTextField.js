import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 14,
    multiLine: true,
    lineHeight: '-30px',
    padding: '1vh',
    margin: '2vh 2vh 2vh 2vh',
    width: '80vw',
    // height: '20vh',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  menu: {
    width: 200,
  },
});

const ClientSummaryTextField = (props) => {
  const { classes, summaryValue, handleSummaryChange } = this.props;
  return (
    <TextField
      value={summaryValue}
      onChange={handleSummaryChange}
      rowsMax="4"
      placeholder="Placeholder"
      multiline
      rows="4"
      defaultValue="Default Value"
      className={classes.textField}
      margin="normal"
      className={classes.textField}
      InputProps={{
        disableUnderline: true,
        classes: {
          root: classes.textFieldRoot,
          input: classes.textFieldInput,
        },
      }}
      InputLabelProps={{
        shrink: true,
        className: classes.textFieldFormLabel,
      }}
    />
  );
};

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);

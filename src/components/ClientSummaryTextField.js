import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '12px',
    color: !'grey', 
  },
  textField: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: '12px',
    multiLine: true,

    padding: '1vh',
    // margin: '2h vh 2vh 1vh',
    width: '44vw',
    // height: '20vh',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  menu: {
    width: 100,
  },
});

class ClientSummaryTextField extends React.Component{
  propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
 
  render() {
      
    const { classes, summaryValue, handleSummaryChange } = this.props;
    return (
      <TextField  
        value={summaryValue}
        onChange={handleSummaryChange}
        rowsMax="4"
        multiline
        rows="4" 
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
  }
}

export default withStyles(styles)(ClientSummaryTextField);

          
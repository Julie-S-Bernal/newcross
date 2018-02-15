import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import purple from 'material-ui/colors/purple';
import Button from 'material-ui/Button';
import { Add } from 'material-ui-icons';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  inputLabelFocused: {
    color: purple[500],
  },
  inputInkbar: {
    '&:after': {
      backgroundColor: purple[500],
    },
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
});

const AdditionalSkillTextField = (props) =>  {
  const { skillTextValue, handleSkillTextChange, classes } = props;
  return   (<TextField
    value={skillTextValue}
    onChange={handleSkillTextChange}
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
  />)
}

class SkillTextField extends React.Component {

  propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    editMode: false
  }

  handleClick = (event) => {
    this.setState({
      editMode: true
    });
  }


  render(){
    const {editMode} = this.state
    const {classes, skillTextValue, handleSkillTextChange, handleSkillClick} = this.props;
    return (
    <div className={classes.container}>
      {editMode && 
        <div>
          <AdditionalSkillTextField 
            classes={classes} 
            skillTextValue={skillTextValue} 
            handleSkillTextChange={handleSkillTextChange} 
            handleSkillClick={handleSkillClick}
          />
          <Button variant="raised" onClick={handleSkillClick}> 
            Add
          </Button>
        </div> 
      }
      
      {! editMode && 
        <Button color="primary"onClick={this.handleClick}> 
          <Add /> 
          Add Additional Skills 
        </Button> 
      }
    </div>
    );
  }
}
export default withStyles(styles)(SkillTextField);
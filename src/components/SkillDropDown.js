import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl} from 'material-ui/Form';
import Select from 'material-ui/Select';
import data from '../skills.json';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    paddingTop: '1vh',
    paddingBottom: '1vh',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class SkillDropdown extends React.Component {

  propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const{classes, skillValue, handleSkillChange } = this.props;
    return (
        <FormControl className={classes.formControl} fullWidth>
        <InputLabel htmlFor="simple">Select Skill and Competency</InputLabel>
        <Select value={skillValue} onChange={handleSkillChange} >     
          {data.skills.map( val => (<MenuItem value={val}>{val}</MenuItem>))}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(SkillDropdown);
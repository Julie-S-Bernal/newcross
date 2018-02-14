import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem,ListItemText, ListItemIcon} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import FolderIcon from 'material-ui-icons/Folder';
import DeleteIcon from 'material-ui-icons/Delete';
import SkillDropDown from './SkillDropDown';
import IndexPage from './IndexPage';
import {skillValue} from './IndexPage';
import {handleSkillChange} from'./IndexPage';
import { Remove } from 'material-ui-icons';
import Button from 'material-ui/Button';


const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class SkillList extends React.Component {

  propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {

    //render them into list here
    const {classes, handleRemoveSkill} = this.props;
    return (
      <div className={classes.root}>
              <List>
                  { this.props.skills && this.props.skills.map((skill, index) => 
                    <ListItem button onClick={(event) => handleRemoveSkill(index) }>
                      <ListItemIcon>
                        <Remove /> 
                      </ListItemIcon>
                      <ListItemText primary={skill}  />
                    </ListItem>
                  )}
              </List>
            </div>
    );
  }
}


export default withStyles(styles)(SkillList);
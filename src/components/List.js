import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem,ListItemText} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import FolderIcon from 'material-ui-icons/Folder';
import DeleteIcon from 'material-ui-icons/Delete';
import SkillDropDown from './SkillDropDown';
import CenteredGrid from './CenteredGrid';
import {skillValue} from './CenteredGrid';
import {handleSkillChange} from'./CenteredGrid';


const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class ItemsList extends React.Component {

  propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {

    //render them into list here
    const {classes} = this.props;
    console.log(this.props.skills);
    return (
      <div className={classes.root}>
              <List>
                <ListItem>
                  { this.props.skills && this.props.skills.map(skill => 
                    <ListItemText
                    primarykey={this.handleSkillChange }
                    secondary={skill}
                    //to do a function to push them into the list each time the user does it.
                    />
                  )}
                </ListItem>
              </List>
            </div>
    );
  }
}


export default withStyles(styles)(ItemsList);
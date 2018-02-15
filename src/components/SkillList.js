import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem,ListItemText, ListItemIcon} from 'material-ui/List';
import { Remove } from 'material-ui-icons';

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
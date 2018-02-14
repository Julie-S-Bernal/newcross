import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import ClientSummary from './ClientSummary';
import DurationPackage from './DurationPackage';
import EndPackage from './EndPackage';
import StaffGender from './StaffGender';
import SkillDropdown from './SkillDropDown';
import SkillList from './SkillList';
import SkillTextField from './SkillTextField';
import Stepper from './Stepper'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


function CenteredGrid(props) {
  const { classes,
          summaryValue,
          handleSummaryChange,
          dateValue,
          handleDateChange,
          endValue,
          handleEndChange,
          staffValue,
          handleStaffChange,
          skillValue,
          handleSkillChange, 
          skillTextValue,
          handleSkillTextChange,
          handleSkillClick,
          handleRemoveSkill
        } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
          <Stepper />
        <Grid item xs={6}>
          <h1 style={fontSize} >Client Summary </h1>
          <Paper className={classes.paper}>
          <ClientSummary summaryValue={summaryValue} handleSummaryChange={handleSummaryChange} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <h1>Duration of Package </h1>
          <Paper className={classes.paper}>
          <DurationPackage dateValue= {dateValue} handleDateChange={handleDateChange} />
          <EndPackage endValue= {endValue} handleEndChange={handleEndChange} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <h1>Skills and Competencies Required </h1>
          <Paper className={classes.paper}>
            <SkillDropdown  skillValue={skillValue} handleSkillChange={handleSkillChange} />
            <SkillList skills={skillValue} handleRemoveSkill={handleRemoveSkill} />
            <SkillTextField 
              skillTextValue={skillTextValue}
              handleSkillTextChange={handleSkillTextChange} 
              handleSkillClick={handleSkillClick}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <h1>Staff Gender Preferences </h1>
          <Paper className={classes.paper}>
          <StaffGender staffValue= {staffValue} handleStaffChange={handleStaffChange} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import ClientSummary from './ClientSummary';
import DurationPackage from './DurationPackage';
import EndPackage from './EndPackage';
import StaffGender from './StaffGender';
import SkillCompetency from './SkillCompetency';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 10,
    width: '45vw',
    height: '20vh',
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
        } 
          = props;


  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          {/* use stepper */}
        </Grid>
        <Grid item xs={6}>
          <h1>Client Summary </h1>
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
          <SkillCompetency skillValue= {skillValue} handleSkillChange={handleSkillChange} />
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

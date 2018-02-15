import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import ClientSummaryTextField from './ClientSummaryTextField';
import DurationPackageDate from './DurationPackageDate';
import EndPackageDate from './EndPackageDate';
import StaffGenderRadio from './StaffGenderRadio';
import SkillDropdown from './SkillDropDown';
import SkillList from './SkillList';
import SkillTextField from './SkillTextField';
import Steps from './Steps'
import Divider from 'material-ui/Divider';
import '../App.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    color: 'grey',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function IndexPage(props) {
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
          handleRemoveSkill,
          handleSubmit,
        } = props;
      
     
const title = {
  fontSize: '16px',
  color: 'grey',
  textTransform: 'uppercase',
  fontWeigth:'lighter',
};


  return (
    <div className={classes.root}>
    <form onSubmit={handleSubmit}>
        <Grid justify="center" container spacing={24}>
        <Grid  item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Steps />
        </Grid>
          <Grid  item xs={6} sm={6} md={6} lg={6} xl={6}>
            <h1 style={title} >Client Summary </h1>
            <Paper className={classes.paper}>
            <ClientSummaryTextField summaryValue={summaryValue} handleSummaryChange={handleSummaryChange} />
            </Paper>
          </Grid>
          <Grid item item xs={6} sm={6} md={6} lg={6} xl={6}>
            <h1 style={title}>Duration of Package </h1>
            <Paper className={classes.paper}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <DurationPackageDate dateValue= {dateValue} handleDateChange={handleDateChange} />
              <EndPackageDate endValue= {endValue} handleEndChange={handleEndChange} />
            </div>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <h1 style={title}>Skills and Competencies Required </h1>
            <Paper className={classes.paper}>
              <SkillDropdown  skillValue={skillValue} handleSkillChange={handleSkillChange} />
              <SkillList skills={skillValue} handleRemoveSkill={handleRemoveSkill} />
              <Divider />
              <SkillTextField 
                skillTextValue={skillTextValue}
                handleSkillTextChange={handleSkillTextChange} 
                handleSkillClick={handleSkillClick}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
            <h1 style={title}>Staff Gender Preferences </h1>
            <Paper className={classes.paper}>
            <StaffGenderRadio staffValue= {staffValue} handleStaffChange={handleStaffChange} />
            </Paper>
          </Grid>
          <Grid   item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Divider />
          </Grid>
          <Grid   item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button variant="raised" color="primary" type="submit" className="btn btn-primary">
            Next 
          </Button>
          </Grid>
        </Grid>
        </form>
    </div>
  );
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexPage);

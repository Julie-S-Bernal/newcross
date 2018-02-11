import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import ClientSummary from './ClientSummary';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          {/* use stepper */}
        </Grid>
        <Grid item xs={6}>
          <h1>Client Summary </h1>
          <ClientSummary />
        </Grid>
        <Grid item xs={6}>
          <h1>Duration of Package </h1>
        </Grid>
        <Grid item xs={6}>
          <h1>Skills and Competencies Required </h1>
        </Grid>
        <Grid item xs={6}>
          <h1>Staff Gender Preferences </h1>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);

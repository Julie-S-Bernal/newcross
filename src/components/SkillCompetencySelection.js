// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
// import Input, { InputLabel } from 'material-ui/Input';
// import { MenuItem } from 'material-ui/Menu';
// import { FormControl, FormHelperText } from 'material-ui/Form';
// import Select from 'material-ui/Select';
// import Paper from 'material-ui/Paper';
// import data from '../skills.json';
// console.log(data);

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   formControl: {
//     margin: theme.spacing.unit,
//     minWidth: 250,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing.unit * 2,
//   },
// });
// state = {
//     skill: ''
//   };

// class SkillCompetencySelection extends React.Component {
//   propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

//   render() {

//     const { classes, skillValue, handleSkillChange } = this.props;
//     console.log(skillValue);
//     return (

//       <form className={classes.root} autoComplete="off">
//         <FormControl className={classes.formControl}>
//           <InputLabel htmlFor="simple">Select Skill and Competency</InputLabel>
//           <Select
//             value={skillValue} 
//             onChange={handleSkillChange}
//           >
//             {data.skills.map( val => (<MenuItem value={val}>{val}</MenuItem>))}
//           </Select>
//         </FormControl>
//       </form>

//     );
//   }
// }

// export default withStyles(styles)(SkillCompetencySelection);
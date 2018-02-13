import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// have a look at colors that I need here
import { blue, grey, red } from 'material-ui/colors';
import './style/App.css';
import CenteredGrid from './components/CenteredGrid.js';

const accent = blue['500'];
const second = grey['100'];

const theme = createMuiTheme({
  palette: {
    primary: {
      ...blue,
      500: accent,
    },
    secondary: {
      ...grey,
      100: second,
    },
    error: red,
  },
});

class App extends React.Component {
  state = {
    summaryValue: 'Please add summary of client and why they need care',
    dateValue: 'dd/mm/yyyy',
    endValue: '',
    staffValue:'None',
    skillValue: [],
    skillTextValue: 'Please Enter your additional skill',
  };

  handleSummaryChange = (event) =>  {
    console.log(event);
    this.setState({
      summaryValue: event.target.value,
    });
  }
  handleDateChange = (event) =>  {
    this.setState({
      dateValue: event.target.value,
    });
  }
  handleEndChange = (event) =>  {
    this.setState({
      endValue: event.target.value,
    });
  }
  
  handleStaffChange = (event) =>  {
    this.setState({
      staffValue: event.target.value,
    });
  }
  
  handleSkillChange = (event) => {
    const newSkillValues = [...this.state.skillValue, event.target.value]
    this.setState({ skillValue: newSkillValues } );
  }

  handleSkillTextChange = (event) => {
    this.setState({
      skillTextValue: event.target.value
    });
  }

  handleSkillClick = (event) => {
    debugger;
    const newSkillValues = [...this.state.skillValue, this.state.skillTextValue]
    this.setState({ skillValue:  newSkillValues});
  }
  

  handleStaffChange = (event) =>  {
    console.log(event);
    this.setState({
      skillTextValue: event.target.value,
    });
  }

  handleRemoveSkill = (index) => {
    console.log('Index:', index);
    debugger;
    this.setState( (state) => {
      const val = this.state.skillValue;
      val.splice(index, 1);
      return { skillValue: val }
    }) 
  }

  render() {
    const { summaryValue } = this.state;
    const {dateValue, endValue, staffValue, skillValue, skillTextValue} =this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <p>I work </p>
          <CenteredGrid 
            handleSummaryChange={this.handleSummaryChange} 
            summaryValue={summaryValue} 
            handleDateChange={this.handleDateChange} 
            dateValue={dateValue}
            handleEndChange={this.handleEndChange} 
            endValue={endValue} 
            handleStaffChange={this.handleStaffChange} 
            staffValue={staffValue}
            handleSkillChange={this.handleSkillChange}
            skillValue={skillValue}
            skillTextValue={skillTextValue} 
            handleSkillTextChange={this.handleSkillTextChange}
            handleSkillClick={this.handleSkillClick}
            handleRemoveSkill={this.handleRemoveSkill}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

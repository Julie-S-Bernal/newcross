import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './style/index.css';
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
    skillvalue:'',

  };

  handleSummaryChange = (event, summaryValue) =>  {
    console.log(event);
    this.setState({
      summaryValue: event.target.value,
    });
  }
  handleDateChange = (event, dateValue) =>  {
    console.log(event);
    this.setState({
      dateValue: event.target.value,
    });
  }
  handleEndChange = (event, endValue) =>  {
    console.log(event);
    this.setState({
      endValue: event.target.value,
    });
  }
  handleStaffChange = (event, staffValue) =>  {
    console.log(event);
    this.setState({
      staffValue: event.target.value,
    });
  }
  handleSkillChange = (event, skillValue) => {
    console.log(event);
    this.setState({
      skillValue: event.target.value,
    });
  };

  render() {
    const { summaryValue } = this.state;
    const {dateValue} =this.state;
    const {endValue} =this.state;
    const {staffValue} =this.state;
    const {skillValue} =this.state;
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
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

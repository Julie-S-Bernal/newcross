import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './style/index.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// have a look at colors that I need here
import { blue, grey, red } from 'material-ui/colors';
import './style/App.css';
import Layout from './components/Layout.js';

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
    dateValue: 'dd/mm/yyyy'
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

  render() {
    const { summaryValue } = this.state;
    const {dateValue} =this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <p>I work </p>
          <Layout handleSummaryChange={this.handleSummaryChange} summaryValue={summaryValue} handleDateChange={this.handleDateChange} dateValue={dateValue} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

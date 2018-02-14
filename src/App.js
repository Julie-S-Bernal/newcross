import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// have a look at colors that I need here
import { blue, grey, red } from 'material-ui/colors';
import './style/App.css';
import CenteredGrid from './components/CenteredGrid.js';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

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

  SUMMARYVALUEDEFAULT =  'Please add summary of client and why they need care';
  DATEVALUEDEFAULT = '01/01/2018';
  ENDVALUEDEFAULT = null;
  STAFFVALUEDEFAULT= null;
  SKILLVALUEDEFAULT= [];
  SKILLTEXTVALUEDEFAULT = 'Please Enter your additional skill';

  state = {
    summaryValue: this.SUMMARYVALUEDEFAULT,
    dateValue: this.DATEVALUEDEFAULT,
    endValue: this.ENDVALUEDEFAULT,
    staffValue: this.STAFFVALUEDEFAULT,
    skillValue: this.SKILLVALUEDEFAULT,
    skillTextValue: this.SKILLTEXTVALUEDEFAULT,
  };

  handleSummaryChange = (event) => {
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
    const newSkillValues = [...this.state.skillValue, this.state.skillTextValue]
    this.setState({ skillValue:  newSkillValues});
  }
  
  handleStaffChange = (event) =>  {
    this.setState({
      skillTextValue: event.target.value,
    });
  }

  handleRemoveSkill = (index) => {
    this.setState( (state) => {
      const val = this.state.skillValue;
      val.splice(index, 1);
      return { skillValue: val }
    }) 
  }

  valid = () => {
    const {
      summaryValue,
      dateValue,
      endValue,
      staffValue,
      skillValue   
    } = this.state;

    const errors = []
    let valid = true  

    if(!summaryValue || summaryValue === this.SUMMARYVALUEDEFAULT) {
      errors.push("Client summary is not valid.")
      valid =  false
    }
    
    if(!dateValue || dateValue === this.DATEVALUEDEFAULT) {
      errors.push('Start date is not valid.')
      valid =  false;
    }

    if(! endValue || endValue === this.ENDVALUEDEFAULT ){
      errors.push('End date not is valid.')
      valid =  false
      
    }

    if(!staffValue || staffValue === this.STAFFVALUEDEFAULT){
      errors.push('Staff preference is not valid')
      valid =  false;
    }
    
    if(!skillValue ||  skillValue.length < 1){
      errors.push('Imput at least one skill')
      valid =  false;
    }
    const reducer = (accumulator, currentValue) => accumulator + '\n' + currentValue;
    
    if(errors)
      alert(errors.reduce(reducer));
    else{
      alert('Form not valid.')
    }
    return true
  }

  submit = () => console.log(this.state);

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
          <Divider />
          <Button 
            onClick={ () => { 
              if(this.valid()){ 
                this.submit(); 
              }
              }}>
              Next 
          </Button>

        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;

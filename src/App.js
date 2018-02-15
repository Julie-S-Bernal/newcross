import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// have a look at colors that I need here
import { blue, grey, red } from 'material-ui/colors';
import './style/App.css';
import IndexPage from './components/IndexPage.js';
import NotificationSystem from  'react-notification-system';

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

  // followed example form react-notification-system:
  // https://github.com/igorprado/react-notification-system 
  _notificationSystem = null;

  addNotification = (msg, level='error') => {
    this._notificationSystem.addNotification({
      message: msg,
      level: level
    });
  }

  componentDidMount =() => {
    this._notificationSystem = this.refs.notificationSystem;
  }

  SUMMARYVALUEDEFAULT =  'Please add summary of client and why they need care';
  DATEVALUEDEFAULT = null;
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
    if(this.state.skillTextValue === this.SKILLTEXTVALUEDEFAULT || this.state.skillTextValue === '') {
      this.addNotification('Please enter a Skill.');
    } else {
      const newSkillValues = [...this.state.skillValue, this.state.skillTextValue]
      this.setState({ skillValue:  newSkillValues, editMode: false});
    }
  }
  
  handleRemoveSkill = (index) => {
    this.setState( (state) => {
      const val = this.state.skillValue;
      val.splice(index, 1);
      return { skillValue: val }
    }) 
  }
  
  validate = () => {
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
      this.addNotification("Please complete summary text box.");
      valid =  false
    }
    
    if(!dateValue || dateValue === this.DATEVALUEDEFAULT) {
      this.addNotification('Please select a start date.');
      valid =  false;
    }

    if(! endValue || endValue === this.ENDVALUEDEFAULT ){
      valid =  false;
      this.addNotification('Please selelct an end date unless you are receiving ongoing treatement.');
    }

    if(!staffValue || staffValue === this.STAFFVALUEDEFAULT){
      valid =  false;
      this.addNotification('Please select a staff gender preference.')
    }
    
    if(!skillValue ||  skillValue.length < 1){
      this.addNotification('You must select a least one skill.')
      valid =  false;
    }
    
    return true
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.validate()){
      console.log(this.state);
    }    
  }

  render() {
    const { summaryValue } = this.state;
    const {dateValue, endValue, staffValue, skillValue, skillTextValue, handleSubmit} =this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <IndexPage
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
            handleSubmit={this.handleSubmit}
          />

        </div>
        <NotificationSystem ref="notificationSystem" />
      </MuiThemeProvider>
    );
  }
}


export default App;

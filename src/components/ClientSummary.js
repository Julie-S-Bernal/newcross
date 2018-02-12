import React from 'react';
import Paper from 'material-ui/Paper';
import ClientSummaryTextField from './ClientSummaryTextField';




const ClientSummary = (props) => {
  const { summaryValue, handleSummaryChange } = props;
  return (
    <Paper>
      <ClientSummaryTextField summaryValue={summaryValue} handleSummaryChange={handleSummaryChange} />
    </Paper>
  );
};

export default ClientSummary;
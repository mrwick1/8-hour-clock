import React from 'react';
import Home from './view/Home';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Home />
    </LocalizationProvider>
  );
};

export default App;

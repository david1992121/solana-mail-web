import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from './theme';
import { Signin } from './pages/loggedout/signin';
import { Main } from './pages/loggedin';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/mail' element={<Main />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
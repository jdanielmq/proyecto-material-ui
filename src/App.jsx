import React from 'react';
import Buttons from './components/Buttons'
import ButtonsIcon from './components/ButtonsIcono'
import Typographys from './components/Typographys';
import MakeStyles from './components/MakeStyles';
import CreateMuiTheme from './components/CreateMuiTheme';

import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig'

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Material UI</h1>
       <ThemeProvider theme={theme}>
          <hr/>
          <Buttons/>
          <hr/>
          <ButtonsIcon/>
          <hr/>
          <Typographys/>
          <hr/>
          <MakeStyles/>
          <hr/>
          <CreateMuiTheme/>
      </ThemeProvider>

    </div>
  );
}

export default App;

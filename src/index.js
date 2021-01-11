import React from 'react';
import ReactDOM from 'react-dom';
import MaterialExample from "./Example/MaterialExample";
import {setupRafMaterial} from "./Setup";
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";

setupRafMaterial();
const theme = createMuiTheme({palette: {type: "dark"}});
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <MaterialExample/>
    </MuiThemeProvider>,
    document.getElementById('root')
);


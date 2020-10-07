import React from 'react';
import ReactDOM from 'react-dom';
import MaterialExample from "./Example/MaterialExample";
import {setupRafMaterial} from "./setup";

setupRafMaterial();

ReactDOM.render(
    <MaterialExample/>,
    document.getElementById('root')
);


//Dependencias
import React from 'react';
import { render } from 'react-dom';
//Assets
import './index.css';
import AppRoutes from './Routers';
import registerServiceWorker from './registerServiceWorker';

render(
    <AppRoutes />,
    document.getElementById('root')
);
registerServiceWorker();









//Bracket pair colorized
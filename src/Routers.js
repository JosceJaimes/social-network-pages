// Dependencias
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'


import App from './App';
import Muro from './components/Muro';
import Autentification from './components/Autentification'

const AppRoutes =()=>{
    return(
    <App>
        <BrowserRouter>
            <Switch>
                <Route path="/muro" component={Muro}/>
                <Route path="/autentification" component={Autentification}/>         
            </Switch>
        </BrowserRouter>
    </App>
    )
}
export default AppRoutes;
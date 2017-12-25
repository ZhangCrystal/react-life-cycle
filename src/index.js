import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import App from './components/app';
import Home from './components/home';


ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/" component={App} ></Route>
        </Switch>
    </BrowserRouter>
    , document.querySelector('.app'));
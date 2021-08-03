import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
};

export default Routes;
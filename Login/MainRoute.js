import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../Login/SignIn';
import Register from '../Login/Register';

const MainRoute = () => (
    <Switch>
        <Route exact path={["/", "/signIn/"]} component={SignIn} />
        <Route exact path='/register/' component={Register} />
    </Switch>
)


export default MainRoute;
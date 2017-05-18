
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Forum from '../views/Forum';
import User from '../views/User';
import Personal from '../views/Personal';
import Competitions from '../views/Competitions';
import CollapseLeft from '../components/Competitions/CollapseLeft';
import SignUp from '../components/Competitions/SignUp';

const routes = browserHistory => (
    <Router history={browserHistory}>
        <Route path="/home" component={Frame}>
            <IndexRoute component={Home} />
            <Route path="/user" component={User} />
            <Route path="/detail" component={Detail} />
            <Route path="/forum" component={Forum} />
            <Route path="/personal" component={Personal} />
            <Route path="/competitions" component={Competitions}>
                <IndexRoute component={CollapseLeft} />
                <Route path="/competitions/signup" component={SignUp} />
            </Route>
        </Route>
    </Router>
);

export default routes;


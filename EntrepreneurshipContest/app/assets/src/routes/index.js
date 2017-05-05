
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Forum from '../views/Forum';

const routes = browserHistory => (
    <Router history={browserHistory}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Home} />
            <Route path="/detail" component={Detail} />
            <Route path="/forum" component={Forum} />
        </Route>
    </Router>
);

export default routes;


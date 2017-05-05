import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import routes from './routes';
import DevTools from './redux/DevTools';
import 'whatwg-fetch';

import 'antd/dist/antd.less';
import './app.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const appEle = document.getElementById('App');
const microdata = JSON.parse(appEle.getAttribute('data-microdata'));
let mydata = JSON.parse(appEle.getAttribute('data-mydata'));
mydata.nick += ', then client reRender';

class App extends React.Component {
    static propTypes = {
        microdata: PropTypes.object,
        mydata: PropTypes.object,
    };
    
    render() {
        return (
            <Provider store={store}>
                <div>
                    {routes(history)}
                </div>
            </Provider>
        )
    }
}

render(<App mydata={mydata} microdata={microdata} /> , appEle);

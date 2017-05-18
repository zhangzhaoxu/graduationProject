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

import defaultImg from '../../static/xiaoxin.jpg';

const appEle = document.getElementById('App');
const userInfo = JSON.parse(appEle.getAttribute('data-userInfo')) || {};
const homeData = JSON.parse(appEle.getAttribute('data-homeData')) || {};
const competitionsData = JSON.parse(appEle.getAttribute('data-competitionsData')) || {};

const initialState = {
    all: {
        register: {
            logged: userInfo.isLogged == "logged" ? true : false,
            headPorhtrait: defaultImg,
            message: 0
        },
        homeMain: {
            newsList: homeData.newsData
        },
        homeTabs: {
            tabsList: homeData.tabsData
        },
        competitions: {
            competitionsList: competitionsData
        }
    }
};

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component {
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

render(<App /> , appEle);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from '../components/Home/Slider';
import Main from '../components/Home/Main';
import Tabs from '../components/common/Tabs';
import tabWrapper from '../components/Home/TabsWrapper';
import { homeActions } from './HomeRedux';
import './Home.scss';
import './Forum.scss';

@connect(
	state => {
		console.log(state);
		return {
			news: state.all.homePersonal.newsList,
			tabs: state.all.homePersonal.tabsList
		}
	},
	dispatch => ({
		loadNewsList: bindActionCreators(homeActions.loadNewsList, dispatch),
		loadTabsList: bindActionCreators(homeActions.loadTabsList, dispatch)
	})
)
export default class Home extends Component {
	
	componentDidMount() {
		let { news, tabs, loadNewsList, loadTabsList } = this.props;
		if (news.length == 0) loadNewsList();
		if (tabs.length == 0) loadTabsList();
	}

	render() {
		
		let { news, tabs } = this.props;
		let WrappedTabs = tabWrapper(Tabs, {className: "tabCon", data: tabs});
		return (
			<div className="home">
				<Slider />
				<Main news={news} />
				<WrappedTabs />
			</div>
		);
	}
}




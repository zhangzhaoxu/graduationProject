import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from '../components/Home/Slider';
import Main from '../components/Home/Main';
import Tabs from '../components/common/Tabs';
import tabWrapper from '../components/Home/TabsWrapper';
import { registerActions } from './HomeRedux';
import './Home.scss';
import './Forum.scss';

@connect(
	state => {
		console.log(state);
		return {
			news: state.all.homeMain.newsList,
			tabs: state.all.homeTabs.tabsList
		}
	},
	dispatch => ({
		
	})
)
export default class Home extends Component {

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




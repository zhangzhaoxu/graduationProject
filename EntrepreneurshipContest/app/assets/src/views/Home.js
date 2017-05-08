import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ArticleTable from '../components/Home/Table';
import ArticleModal from '../components/Home/Modal';
import Slider from '../components/Home/Slider';
import Main from '../components/Home/Main';
import Tabs from '../components/common/Tabs';
import tabWrapper from '../components/Home/TabsWrapper';
import { tableActions, modalActions } from './HomeRedux';
import './Home.scss';
import './Forum.scss';

@connect(
	state => ({
		table: state.all.table ,
		modal: state.all.modal,
	}),
	dispatch => ({
		tableActions: bindActionCreators(tableActions, dispatch),
		modalActions: bindActionCreators(modalActions, dispatch)
	})
)
export default class Home extends Component {

	render() {
		let testArr = [
			{
				title: "测试1",
				list: [
					{
						title: '测试测试',
						name: '小明'
					},
					{
						title: '测试测试测试测试测试测试测试测试测试测试测试测试',
						name: '小明'
					},
					{
						title: '测试测试',
						name: '小明'
					}
				]
			},
			{
				title: "测试2",
				list: [
					{
						title: '测试测试',
						name: '小红'
					},
					{
						title: '测试测试测试测试测试测试测试测试测试测试测试测试',
						name: '小红'
					},
					{
						title: '测试测试',
						name: '小红'
					}
				]
			},
			{
				title: "测试3",
				list: [
					{
						title: '测试测试',
						name: '小王'
					},
					{
						title: '测试测试测试测试测试测试测试测试测试测试测试测试',
						name: '小王'
					},
					{
						title: '测试测试',
						name: '小王'
					}
				]
			}
		];
		
		let WrappedTabs = tabWrapper(Tabs, {className: "tabCon", data: testArr});
		
		return (
			<div className="home">
				<Slider />
				<Main />
				<WrappedTabs />
			</div>
		);
	}
}




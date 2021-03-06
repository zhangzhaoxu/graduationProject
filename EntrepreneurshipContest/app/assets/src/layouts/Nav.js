import React,{ Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Menu, Icon } from 'antd';
import { bindActionCreators } from 'redux';
import { registerActions } from '../views/HomeRedux';
import { competitionsActions } from '../views/HomeRedux';
import Register from '../components/Register/Register';
import './Nav.scss';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@connect(
    state => ({
        logged: state.all.register.logged,
        headPorhtrait: state.all.register.headPorhtrait,
        message: state.all.register.message
    }),
    (dispatch) => {
        return {
            push: bindActionCreators(push, dispatch),
            logOut: bindActionCreators(registerActions.logOut, dispatch),
            changeQuery: bindActionCreators(competitionsActions.loadCompetitions, dispatch)
        }
    }
)
export default class Nav extends Component {
    
    static propTypes = {
        push: PropTypes.func
    };

    state = {
        current: 'home'
    };

    handleClick = (e) => {
        this.setState({
            current: e.key
        });
        
        if(e.key.indexOf('setting') !== -1) {
            let id = e.key.split(':')[1];
            let href = window.location.href;
            if (href.indexOf('competitions') !== -1) {
                this.props.changeQuery(id);
            }
            else {
                this.props.push('/competitions?id=' + id);
            }
        } else {
            console.log(e.key);
            this.props.push(e.key);
        }
    };
    
    render () {
        return (
            <div className="header-nav">
                <div className="my-icon">
                    <h1>创业大赛</h1>
                </div>
                <Register {...this.props} />
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    className="my-menu"
                >
                    <Menu.Item key="/home">
                        <Icon type="home" className="homeIcon" /> <span className="homeIcon">首页</span>
                    </Menu.Item>
                    <SubMenu key="competitions" title={<span onClick={this.handleClick.bind(this, {key: '/competitions'})}><Icon type="down-square-o" />全部赛事</span>}>
                        <MenuItemGroup title="赛事状态">
                            <Menu.Item key="setting:1">筹备中</Menu.Item>
                            <Menu.Item key="setting:2">进行中</Menu.Item>
                            <Menu.Item key="setting:3">已结束</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="赛事类型">
                            <Menu.Item key="setting:4">IT类</Menu.Item>
                            <Menu.Item key="setting:5">金融类</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="/forum">
                        赛事论坛
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}


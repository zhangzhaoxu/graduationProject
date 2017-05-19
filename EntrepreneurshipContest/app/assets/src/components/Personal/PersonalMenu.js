import React from 'react';
import { Menu, Icon, Switch } from 'antd';
import './PersonalMenu.scss';
const SubMenu = Menu.SubMenu;

class PersonalMenu extends React.Component {
    state = {
        theme: 'dark',
        current: '1',
    };
    handleClick = (e) => {
        let { handleMenuChange } = this.props;
        this.setState({
            current: e.key
        });
        handleMenuChange(e.key);
    };
    render() {
        return (
            <Menu
                theme={this.state.theme}
                onClick={this.handleClick}
                style={{ width: 240 }}
                defaultOpenKeys={['sub1', 'sub2']}
                selectedKeys={[this.state.current]}
                mode="inline"
            >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>我参加的赛事</span></span>}>
                    <Menu.Item key="1">我的赛事</Menu.Item>
                    <Menu.Item key="2">我要参赛</Menu.Item>
                    <Menu.Item key="3">我的消息</Menu.Item>
                    <Menu.Item key="4">我的帖子</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>个人信息</span></span>}>
                    <Menu.Item key="5">获奖信息</Menu.Item>
                    <SubMenu key="sub3" title="安全设置">
                        <Menu.Item key="6">手机设置</Menu.Item>
                        <Menu.Item key="7">基本资料</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        );
    }
}

export default PersonalMenu;
import React, { Component } from "react";
import { connect } from "react-redux";
import { Avatar, Modal, Input, Icon, message } from 'antd';
import { BoxWarp } from './css';
import { Route, NavLink, Redirect } from 'react-router-dom';
import Talk from './talk';
import { MyIcon } from '../../utils/icon';
import API from '../../utils/api';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: true,
            username: "",
            password: ""
        }
    }
    async componentDidMount() {
        let time = new Date(new Date().getTime() + 86400000).toUTCString();
        document.cookie = `talkId=girl; expires=${time}`;
    }

    /**
     * 确认登录
     */
    onLoginOk = async () => {
        const { username, password } = this.state;
        if (!username || !password) {
            return;
        }
        const result = await API.login(username, password);
        if (result.status) {
            this.setState({
                showLogin: false
            })
        }
    }

    render() {
        const { match, location } = this.props;
        const { showLogin, username, password } = this.state;
        return (
            <BoxWarp>
                <Modal visible={showLogin} title="请登录" onOk={this.onLoginOk} centered mask={true}
                    onCancel={() => { this.setState({ showLogin: false }) }} cancelButtonProps={{ disabled: true }} >
                    <Input placeholder="请输入账户" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        style={{ marginBottom: "10px" }} value={username} onChange={(e) => { this.setState({ username: e.target.value.trim() }) }} />
                    <Input.Password placeholder="请输入密码" prefix={<Icon type="woman" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        value={password} onChange={(e) => { this.setState({ password: e.target.value.trim() }) }} />
                </Modal>
                <div id="inner">
                    <div id="status">状态栏</div>
                    <div id="head">
                        <Avatar shape="square" size="small" src="/images/myavatar.png" />
                        <span className="title">消息</span>
                        <div id="icons">
                            <MyIcon type="icon-xiangji" className="icon-left" />
                            <MyIcon type="icon-jia" />
                        </div>
                    </div>
                    <div id="box">
                        <Route path={`${match.path}/talk`} exact component={Talk} />
                        <Route path={`${match.path}/friends`} component={Talk} />
                        <Route path={`${match.path}/zone`} component={Talk} />
                        <Redirect to={`${match.path}/talk`} />
                    </div>
                    <div id="footer">
                        <NavLink to="/index/talk" activeClassName="active" className="tab">
                            <MyIcon type={location.pathname === "/index/talk" ? "icon-xiaoxi-copy" : "icon-xiaoxi"} />
                            <span className="tab-name">消息</span>
                        </NavLink>
                        <NavLink to="/index/friends" className="tab" activeClassName="active" >
                            <MyIcon type={location.pathname === "/index/friends" ? "icon-lianxiren-copy" : "icon-lianxiren"} />
                            <span className={location.pathname === "/index/friends" ? "tab-name active" : "tab-name"}>联系人</span>
                        </NavLink>
                        <NavLink to="/index/zone" className="tab" activeClassName="active" >
                            <MyIcon type={location.pathname === "/index/zone" ? "icon-dongtai-copy" : "icon-dongtai"} />
                            <span className={location.pathname === "/index/zone" ? "tab-name active" : "tab-name"}>动态</span>
                        </NavLink>
                    </div>
                </div>
            </BoxWarp>
        );
    }
}

const mapStateToProps = ({ Index }) => {
    return {
        val: Index.testVal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);

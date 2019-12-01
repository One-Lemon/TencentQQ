import React, { Component } from "react";
import { TEST } from "./store/actionType";
import { connect } from "react-redux";
import { Avatar } from 'antd';
import { BoxWarp } from './css';
import { Route, NavLink, Redirect } from 'react-router-dom';
import Talk from './talk';
import { MyIcon } from '../../utils/icon';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const { match, location } = this.props;
        return (
            <BoxWarp>
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
        onTest: () => {
            dispatch({
                type: TEST,
                data: '6个核桃'
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);

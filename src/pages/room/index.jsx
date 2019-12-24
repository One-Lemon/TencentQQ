import React, { Component } from 'react';
import { BoxWarp } from "./css";
// import { Avatar } from "antd";
import { MyIcon } from "../../utils/icon";
import API from "../../utils/api";
import Word from "../../components/word";

export default class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    async componentDidMount() {
        const { match } = this.props;
        const { user } = match.params;
        const nowUser = await API.getTalkInfo(user);
        this.setState({
            user: nowUser
        })
    }

    /**
     * 发送消息
     */
    onSend = async (e) => {
        let value = e.target.value;
        const { user } = this.state;
        if (!value) return;
        if (e.keyCode === 13) {
            e.target.value = "";
            let data = {
                "talkId": user.talkId,
                "content": value,
                "avatar": user.avatar,
                "time": new Date().getTime().toLocaleString().replace(/\//g, '-')
            }
            await API.sendTalk(data);
        }
    }

    render() {
        const { history } = this.props;
        const { user } = this.state;
        return (
            <BoxWarp>
                <div id="inner">
                    <div id="status">状态栏</div>
                    <div id="head">
                        <div id="back" onClick={() => {
                            history.push("/");
                        }}>
                            <MyIcon type="icon-fanhui" />
                        </div>
                        <div id="room-name">
                            <MyIcon type="icon-erduo" style={{ marginRight: "5px" }} />
                            {
                                user && user.name
                            }
                        </div>
                        <div id="menu">
                            <MyIcon type="icon-aixin" className="menu-icon" />
                            <MyIcon type="icon-caidan1" className="menu-icon" />
                        </div>
                    </div>
                    <div id="box">
                        <Word info={user && user.info} />
                    </div>
                    <div id="footer">
                        <MyIcon type="icon-icon--" className="icon" />
                        <input type="text" name="talk-inner" id="talk-inner" onKeyUp={this.onSend} />
                        <div className="footer-icons" >
                            <MyIcon type="icon-smile" className="icon" />
                            <MyIcon type="icon-gengduo" className="icon" />
                        </div>
                    </div>
                </div>
            </BoxWarp>
        )
    }
}

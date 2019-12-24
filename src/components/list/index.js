import React, { Component } from "react";
import { connect } from "react-redux";
import { ListWarp } from '../css';
import { Avatar } from "antd";
import { MyIcon } from "../../utils/icon";
import { withRouter } from "react-router-dom";
import { setTalkUser } from "../../pages/index/store/actionCreate";
import request from "../../utils/request";

class Qlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            talkList: []
        }
    }

    async componentDidMount() {
        const talkList = await request({
            url: "talk"
        });
        this.setState({
            talkList
        })
    }

    /**
     * 去聊天
     * @param id 房间id
     */
    onToTalk = (id) => {
        const { history, setUser } = this.props;
        const { talkList } = this.state;
        const user = talkList.find(user => user.talkId === id);
        setUser(user);
        history.push(`/room/${id}`);
    }

    render() {
        const { talkList } = this.state;
        const { onToTalk } = this;
        return (
            <ListWarp>
                {
                    talkList.map(talk => (
                        <div className="list-item" onClick={() => { onToTalk(talk.talkId) }} key={talk.talkId}>
                            <Avatar shape="square" src={talk.avatar} size="default" />
                            <div className="text">
                                <span className="name">{talk.name}</span>
                                <span className="message">{talk.recentMessage}</span>
                            </div>
                            <div className="text2">
                                <span className="time">
                                    {
                                        talk.state && talk.state.map((s, idx) => {
                                            switch (s) {
                                                case "isFire":
                                                    return <MyIcon key={idx} type="icon-huoqing-" />
                                                case "isShip":
                                                    return <MyIcon key={idx} type="icon-lunchuan" />
                                                default:
                                                    return ""
                                            }
                                        })
                                    }
                                    <span>{talk.time}</span>
                                </span>
                                {
                                    talk.quantity > 0 && <span className="quantity">{talk.quantity}</span>
                                }
                            </div>
                        </div>
                    ))
                }
            </ListWarp>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => {
        dispatch(setTalkUser(user))
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Qlist));
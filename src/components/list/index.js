import React, { Component } from "react";
import { connect } from "react-redux";
import { ListWarp } from '../css';
import { Avatar } from "antd";
import { MyIcon } from "../../utils/icon";
import { withRouter } from "react-router-dom";
import { setTalkUser } from "../../pages/index/store/actionCreate";

class Qlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            talkList: [
                { talkId: "girl", name: '现女友', avatar: '/images/myavatar.png', recentMessage: "OK，邱邱说的对", time: "下午 10:09", state: ["isFire", "isShip"], quantity: 2 },
                { talkId: "your", name: '你猜', avatar: '', recentMessage: "sdf", time: "下午 10:09", state: ["isFire", "isShip"], quantity: 0 },
                { talkId: "duola", name: '哆啦A梦', avatar: '', recentMessage: "所答非所问", time: "下午 10:09", state: ["isFire", "isShip"], quantity: 0 },
                { talkId: "diga", name: '迪迦', avatar: '', recentMessage: "纷纷回复", time: "下午 10:09", state: ["isFire", "isShip"], quantity: 0 },
                { talkId: "jiumi", name: '瞅瞅', avatar: '', recentMessage: "山东工商学院", time: "下午 10:09", state: ["isFire", "isShip"], quantity: 0 },
            ]
        }
    }

    /**
     * 去聊天
     * @param id 房间id
     */
    onToTalk = (id) => {
        const { history } = this.props;
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
                                        talk && talk.state.map((s, idx) => {
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

const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = (dispatch, props) => ({
    setUser: () => {
        dispatch(setTalkUser)
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Qlist));
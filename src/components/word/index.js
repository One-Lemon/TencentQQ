import React, { Component } from 'react';
import { WordWarp } from "../css";
import { Avatar } from 'antd';

export default class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mine: ""
        }
    }
    componentDidMount() {
        const mine = document.cookie.split('=')[1];
        this.setState({
            mine
        })
    }
    render() {
        const { info } = this.props;
        const { mine } = this.state;
        return (
            <WordWarp>
                {
                    info && info.map(item => (
                        <div className={item.talkId === mine ? "word-item word-mine" : "word-item"} key={item.talkId}>
                            <div className="avatar">
                                <Avatar size="small" shape="square" src={item.avatar} />
                            </div>
                            <div className="inner">
                                <div className="name">{item.name}</div>
                                <div className="text">{item.content}</div>
                            </div>
                        </div>
                    ))
                }
            </WordWarp>
        )
    }
}

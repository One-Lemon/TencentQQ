import React, { Component } from 'react';
import { WordWarp } from "../css";
import { Avatar } from 'antd';

export default class Word extends Component {
    render() {
        return (
            <WordWarp>
                <div className="avatar">
                    <Avatar size="small" shape="square" src="/images/myavatar.png" />
                </div>
                <div className="inner">
                    <div className="name">姓名</div>
                    <div className="text">内容</div>
                </div>
            </WordWarp>
        )
    }
}

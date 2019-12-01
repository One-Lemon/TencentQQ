import React, { Component } from 'react';
import { BoxWarp } from "./css";
// import { Avatar } from "antd";
import { MyIcon } from "../../utils/icon";


export default class Room extends Component {
    render() {
        return (
            <BoxWarp>
                <div id="inner">
                    <div id="status">状态栏</div>
                    <div id="head">
                        <div id="back">
                            <MyIcon type="icon-fanhui" />
                        </div>
                        <div id="room-name">
                            <MyIcon type="icon-erduo" style={{ marginRight: "5px" }} />邱邱
                        </div>
                        <div id="menu">
                            <MyIcon type="icon-aixin" className="menu-icon" />
                            <MyIcon type="icon-caidan1" className="menu-icon" />
                        </div>
                    </div>
                    <div id="box">

                    </div>
                    <div id="footer">

                    </div>
                </div>
            </BoxWarp>
        )
    }
}

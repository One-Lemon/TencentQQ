import React, { Component } from 'react';
import { MyIcon } from '../../utils/icon';
import Qlist from "../../components/list";

export default class Talk extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocus: false,
			tips: "Windows QQ已登录"
		}
	}
	onSearch = (e) => {
		console.log(e);
	}
	render() {
		const { isFocus, tips } = this.state;
		return (
			<>
				<div id="search">
					<input type="search" name="" id="talk-search" placeholder={isFocus ? "" : "搜索"}
						onFocus={() => { this.setState({ isFocus: true }) }}
						onBlur={() => { this.setState({ isFocus: false }) }} />
					{
						isFocus ? "" : <MyIcon className="icon-fdj" type="icon-gongneng_fangdajing" />
					}
				</div>
				<div id="tips">
					<MyIcon type="icon-31" style={{ fontSize: "16px", marginRight: "10px" }} />
					<span className="tips">{tips}</span>
					<MyIcon type="icon-changyongtubiao-xianxingdaochu-zhuanqu-" />
				</div>
				<Qlist />
			</>
		)
	}
}
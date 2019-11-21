import React, { Component } from "react";
import { TEST } from "./store/actionType";
import { connect } from "react-redux";
import { BoxWarp } from './css';
import { Progress } from 'antd';
class Index extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <BoxWarp>
                <div id="inner">
                    <div id="status">
                        <Progress
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': 'red',
                            }}
                            percent={99.9}
                        />
                    </div>
                    <div id="box">
                        内容区域
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

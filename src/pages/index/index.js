import React, { Component } from "react";
import { TEST } from "./store/actionType";
import { onTest } from "./store/actionCreate";
import { connect } from "react-redux";
class Index extends Component {
    render() {
        return (
            <div>
                <h1>这是首页</h1>
            </div>
        );
    }
}

const mapStateToProps = ({ Index }, props) => {
    console.log(Index, props);
    return {
        val: Index.testVal
    };
};

const mapDispatchToProps = (dispatch, props) => {
    console.log(dispatch, props);
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);

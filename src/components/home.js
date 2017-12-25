import React, { Component } from 'react';
import LifeCycle from './life_cycle';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: Math.random() * 100
        };
    }

    propsChange() {
        this.setState({
            num: Math.random() * 100
        });
    }

    setLifeCycleState() {
        this.refs.rLifeCycle.setTheState();
    }

    forceLifeCycleUpdate() {
        this.refs.rLifeCycle.forceItUpdate();
    }

    parentForceUpdate() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <a href="javascript:;" className="btn btn_primary" onClick={this.propsChange.bind(this)}>propsChange</a>
                <a href="javascript:;" className="btn btn_primary" onClick={this.setLifeCycleState.bind(this)}>setState</a>
                <a href="javascript:;" className="btn btn_primary" onClick={this.forceLifeCycleUpdate.bind(this)}>forceUpdate</a>
                <a href="javascript:;" className="btn btn_primary" onClick={this.parentForceUpdate.bind(this)}>parentForceUpdateWithoutChange</a>
                <LifeCycle ref="rLifeCycle" num={this.state.num}></LifeCycle>
            </div>
        );
    }
}
export default Home;
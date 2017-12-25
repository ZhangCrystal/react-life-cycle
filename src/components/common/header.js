import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div className="header navbar-default">
                <div className="container">
                    <div className="navbar  navbar-design">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="">首页</a>
                            <button className="navbar-toggle" data-toggle="collapse" data-target="#shownav">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>

                        <ul id="shownav" className="nav navbar-nav collapse navbar-collapse">
                            <li><a href="">关于启迪</a></li>
                            <li><a href="">清华科技园</a></li>
                            <li><a href="">启迪孵化器</a></li>
                            <li><a href="">启迪科技园</a></li>
                            <li><a href="">启迪科技城</a></li>
                            <li><a href="">产品与服务</a></li>
                            <li><a href="">党群工作</a></li>
                            <li><a href="">新闻中心</a></li>
                            <li>
                                <a className="dropdown" data-toggle="dropdown" href="">语言<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="">英文</a></li>
                                    <li><a href="">中文</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;



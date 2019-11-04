import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';
import './header.scss';


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <a href="#"><img src={logo} /></a>
                        </div>
                        <div className="col-6 text-right">
                            <a data-fancybox data-src="#nav-area" href="javascript:;"><i class="fas fa-bars"></i></a>
                        </div>
                    </div>
                </div>

                <div id="nav-area">
                    <h2>Hello</h2>
                    <p>You are awesome.</p>
                </div>

            </header>
        )
    }
}
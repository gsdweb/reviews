import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <a href="#"><img src={logo}/></a>

                        </div>
                        <div className="col-6 text-right">
                            <a href="#"><i class="fas fa-bars"></i></a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
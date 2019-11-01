import React, { Component } from 'react';
import banner from '../../assets/img/banner.png';
import banner2 from '../../assets/img/banner2.png';
import banner3 from '../../assets/img/banner3.png';


export default class CarouselHome extends Component {
    render() {
        return (
            <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="10000">
                        <img src={banner} class="d-block w-100" alt="Description" />
                    </div>
                    <div class="carousel-item" data-interval="2000">
                        <img src={banner2} class="d-block w-100" alt="Description" />
                    </div>
                    <div class="carousel-item">
                        <img src={banner3} class="d-block w-100" alt="Description" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        )
    }
}
import React, { Component } from 'react';
import CarouselHome from '../../components/carousel-home/carousel-home';
import CarouselReviews from '../../components/carousel-reviews/carousel-reviews';
import CarouselNews from '../../components/carousel-news/carousel-news';

export default class Home extends Component {
    render() {
        return (
            <main>
                <CarouselHome />
                <div className="container">
                    <div className="row">
                        <CarouselReviews />
                    </div>
                    <div className="row">
                        <CarouselNews />
                    </div>
                </div>
            </main>
        )
    }
}
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

import Header from './components/header/header';
import Ads from './components/ads/ads';
import Footer from './components/footer/footer';

import Home from './pages/home/home';
import About from './pages/about/about';
import Companies from './pages/companies/companies';
import Company from './pages/company/company';
import Review from './pages/review/review';
import Reviews from './pages/reviews/reviews';
import Contact from './pages/contact/contact';
import NotFound from './pages/not-found/not-found';

function App(props) {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/companies" component={Companies} />
        <Route path="/company" component={Company} />
        <Route path="/contact" component={Contact} />
        <Route path="/review"component={Review} />
        <Route path="/reviews" component={Reviews} />
        <Route path="*" component={NotFound} />
      </Switch>
      
      <Ads />
      <Footer />
    </Router>
  );
}

export default App;
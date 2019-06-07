import React, { Component } from 'react';
import {BrowserRouter,  Route } from 'react-router-dom';
import Home from './component/home/home.js';
import Navbar from './component/navbar/navbar.js';
import Footer from './component/footer/footer.js';
import Aboutus from './component/aboutus/aboutus.js';
import Contact from './component/contact/contact.js';
import News from './component/news/news.js';


import './App.css';

class App extends Component {
  state ={
    items:[
      {id:1,services:"AC Services",title:"Great explorer of truth",image:"../image/w1.jpg"},
      {id:2,services:"Heating Services ",title:"Great explorer of truth 2",image:"../image/w2.jpg"},
      {id:3,services:"Energy Services",title:"Great explorer of truth 3",image:"../image/w3.jpg"}

    ]
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route  exact path="/" render={() => <Home items={this.state.items} />} />
          <Route exact  path="/aboutus" component= {Aboutus}/>
          <Route exact path="/News" component= {News}/>
          <Route exact path="/Contact" component= {Contact}/>      
          <Footer />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;

import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Gallery from './Components/Gallery';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      SiteData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getSiteData(){
    $.ajax({
      url:'/siteData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({SiteData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getSiteData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.SiteData.main}/>
        <About data={this.state.SiteData.main}/>
        <Products data={this.state.SiteData.products}/>
        <Gallery data={this.state.SiteData.gallery}/>
        <Testimonials data={this.state.SiteData.testimonials}/>
        <Contact data={this.state.SiteData.main}/>
        <Footer data={this.state.SiteData.main}/>
      </div>
    );
  }
}

export default App;

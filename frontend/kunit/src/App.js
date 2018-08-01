import React, { Component } from 'react';
import Search from './containers/seachth';
import MajorSearch from './containers/major';
import Header from './containers/header';
import Footer from './containers/footer';

import './assets/css/app.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state={
        major:  ""
      }
  }

  handleMajor = (e) => {
    this.setState({major: e})
  }
  

  render() {
    return (
      <div>
        
      <div className="container">
          <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <center><Header /></center>
              </div>
              <div className="col-md-1"></div>
          </div>
          <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
              <MajorSearch major={this.handleMajor}/> 
              </div>
              <div className="col-md-1"></div>
          </div>
          <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
              <Search major={this.state.major}/>
              </div>
              <div className="col-md-1"></div>
          </div> 
      </div>
          <center><Footer /></center>
      
      </div>
    );
  }
}

export default App;

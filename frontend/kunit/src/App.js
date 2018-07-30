import React, { Component } from 'react';
import Search from './containers/seachth';
import MajorSearch from './containers/major';
import Comment from './containers/comment';

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
      <div className="pre-app">
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">KUnit</h1>
          <div className="text-box">
          <br/>
          <h3 className="App-text">เคยูนิต(KUnit) เป็นเว็บไซต์ที่ช่วยคำนวณในการลงทะเบียนเรียนวิชาบูรณาการในมหาวิทยาลัยเกษตรศาสตร์ โดยเราสามารถแนะนำคุณได้ว่ามีวิชาอะไรให้คุณเลือกลงทะเบียนบ้าง คุณลงทะเบียนวิชาบูรณาการวิชาใดไปกี่หน่วยกิตแล้ว และที่สำคัญคือคุณเหลืออีกกี่หน่วยกิตที่จำเป็นต้องลงทะเบียนเรียนเพื่อจบการศึกษา</h3>
          <h3 className="App-text">หากต้องการทราบรายละเอียดอื่นๆของงานสามารถติดตามได้ที่ <a href="https://github.com/WisTiCeJEnT/kunit">Github KUnit</a> </h3>
          </div>
        </header>
        <MajorSearch className = "Major-search" major={this.handleMajor}/>
        <Search className="App-search" major={this.state.major}/>
        <br/>
        <Comment className="Facebook-comment"/>
        <footer className="App-footer"/>
        
      </div>
      
      </div>
    );
  }
}

export default App;

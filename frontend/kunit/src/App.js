import React, { Component } from 'react';
import './App.css';
import Search from './search_th';
import MajorSearch from './major';



class App extends Component {
  render() {
    return (
      <div className="pre-app">
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">KUnit</h1>
          <div className="text-box">
          <br/>
          <text className="App-text">เคยูนิต(KUnit) เป็นเว็บไซต์ที่ช่วยคำนวณในการลงทะเบียนเรียนวิชาบูรณาการในมหาวิทยาลัยเกษตรศาสตร์ โดยเราสามารถแนะนำคุณได้ว่ามีวิชาอะไรให้คุณเลือกลงทะเบียนบ้าง คุณลงทะเบียนวิชาบูรณาการวิชาใดไปกี่หน่วยกิตแล้ว และที่สำคัญคือคุณเหลืออีกกี่หน่วยกิตที่จำเป็นต้องลงทะเบียนเรียนเพื่อจบการศึกษา</text>
          </div>
        </header>
        <MajorSearch classname = "Major-search"/>
        <Search classname="App-search"/>
        
        
      </div>
      
      </div>
    );
  }
}

export default App;
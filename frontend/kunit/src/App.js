import React, { Component } from 'react';
import './App.css';
import Search from './search_th';
import MajorSearch from './major';
import Comment from './comment';



class App extends Component {
  constructor(props){
    super(props)
      this.state={
        major:""
      }
      this.handleMajor=this.handleMajor.bind(this)
  }
  

  handleMajor(e){
    
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
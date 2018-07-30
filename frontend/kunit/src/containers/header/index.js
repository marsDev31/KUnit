import React, { Component} from 'react';
export default class Header extends Component {
  render() {
    return (
        <div>
        <div style={{paddingTop: 40}}></div>
        <h1 style={{fontSize: 70}}>KUnit</h1>
        <div style={{paddingTop: 30}}></div>
        <h4 style={{fontSize: 16}}>มีปัญหาเรื่องคำนวณหน่วยกิตวิชาบูรฯ รึเปล่า? มาลองใช้ KUnit กันซิ !</h4>
        <div style={{paddingTop: 40}}></div>
        </div>
    );
  }
}

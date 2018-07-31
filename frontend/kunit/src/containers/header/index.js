import React, { Component} from 'react';
import Mortar from '../../assets/icon/mortar-board.svg'
export default class Header extends Component {
  render() {
    return (
        <div>
        <div style={{paddingTop: 40}}></div>
        <div style={{fontSize: 73}}><strong><u>KU</u>nit <img src={Mortar} width="65" /></strong></div>
        <div style={{paddingTop: 30}}></div>
        <h4 style={{fontSize: 16}}>" มีปัญหาเรื่องคำนวณหน่วยกิตวิชาบูรฯ รึเปล่า? มาใช้ KUnit กันซิ ! "</h4>
        <div style={{paddingTop: 40}}></div>
        </div>
    );
  }
}

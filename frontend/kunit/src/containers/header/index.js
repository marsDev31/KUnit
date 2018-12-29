import React, { Component } from 'react'
import Mortar from '../../assets/icon/mortar-board.svg'
export default class Header extends Component {
  render() {
    return (
      <div>
        <div style={{ paddingTop: 20 }} />
        <div style={{ fontSize: 73 }}>
          <strong>
            <u>KU</u>nit <img src={Mortar} width="65" alt="icon-mortar" />
          </strong>
        </div>
        <div style={{ paddingTop: 30 }} />
        <h4 style={{ fontSize: 14.5 }}>
          " มีปัญหาการคำนวณหน่วยกิตวิชาบูรฯ รึเปล่า? มาใช้ KUnit กันซิ! "
        </h4>
        <div style={{ paddingTop: 40 }} />
      </div>
    )
  }
}

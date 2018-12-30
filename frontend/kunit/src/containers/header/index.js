import React, { Component } from 'react'
import Mortar from '../../assets/icon/mortar-board.svg'
import styled from 'styled-components'
export default class Header extends Component {
  render() {
    const HeaderPainPoint = styled.h4`
      font-size: 15.5px;
      @media only screen and (max-width: 550px) {
        font-size: 12.6px;
      }
    `
    return (
      <div>
        <div style={{ paddingTop: 20 }} />
        <div style={{ fontSize: 73 }}>
          <strong>
            <u>KU</u>nit <img src={Mortar} width="65" alt="icon-mortar" />
          </strong>
        </div>
        <div style={{ paddingTop: 30 }} />
        <HeaderPainPoint>
          มีปัญหาการคำนวณหน่วยกิตวิชาบูรฯ รึเปล่า? มาใช้ KUnit กันซิ!
        </HeaderPainPoint>
        <div style={{ paddingTop: 40 }} />
      </div>
    )
  }
}

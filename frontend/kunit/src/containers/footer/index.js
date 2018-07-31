import React, { Component} from 'react';
import Github from '../../assets/icon/mark-github.svg'
import Heart from '../../assets/icon/heart.svg'
export default class Footer extends Component {
  render() {
    return (
        <div>
        <div style={{paddingTop: 24}}></div>
        <h1 style={{fontSize:16}}>~ writen with <img src={Heart} width="20" alt="icon-heart" /> on <img src={Github} width="23" alt="icon-github" /> at <strong style={{fontSize:24}}>KU</strong></h1>
        <div style={{paddingTop: 24}}></div>
        
        </div>
    );
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'
import Github from '../../assets/icon/mark-github.svg'
import Heart from '../../assets/icon/heart.svg'

const Container = styled.div`
  margin: 15px auto 34px auto;
`

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <h1 style={{ fontSize: 16 }}>
          ~ writen with <img src={Heart} width="20" alt="icon-heart" /> on{' '}
          <img src={Github} width="23" alt="icon-github" /> at{' '}
          <strong style={{ fontSize: 24 }}>KU</strong>
        </h1>
      </Container>
    )
  }
}

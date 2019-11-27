import React, { Component } from 'react'
import styled from 'styled-components'
import Github from '../../assets/icon/mark-github.svg'
import Heart from '../../assets/icon/heart.svg'
import img_marsdev from '../../assets/icon/marsdev31.png'
const Container = styled.div`
  margin: 15px auto 34px auto;
`

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  strong {
    margin: 0 0.4rem;
  }
`

const Image = styled.img`
  margin: 0 0.4rem;
`

const PowerBy = styled.p`
  margin: -1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  strong {
    margin: 0 0.4rem;
  }
`

const MarsDev = styled.img`
  width: 22px;
  height: 22px;
  margin: 0 0.4rem;
`

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <Text style={{ fontSize: 16 }}>
          ~ writen with{' '}
          <Image src={Heart} width="23" height="23" alt="icon-heart" /> on{' '}
          <a href="https://github.com/marsDev31/KUnit" target="_blank">
            <Image src={Github} width="23" height="23" alt="icon-github" />
          </a>{' '}
          at <strong style={{ fontSize: 20 }}>KU</strong>
        </Text>
        <PowerBy href="http://fb.com/marsDev31/" target="_blank">
          power by <strong style={{ fontSize: 18 }}> marsdev31 </strong>
          <a href="http://fb.com/marsDev31/" target="_blank">
            <MarsDev src={img_marsdev} />
          </a>
        </PowerBy>
      </Container>
    )
  }
}

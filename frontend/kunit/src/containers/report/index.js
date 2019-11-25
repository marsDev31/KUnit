import React from 'react'
import styled from 'styled-components'
import Reqiure from './require'
import Bug from './bug'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

const ReportContainer = () => {
  return (
    <Container>
      <Reqiure />
      <Bug />
    </Container>
  )
}

export default ReportContainer

import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  background: white;
  color: black;
  width: 8%;
  min-width: 100px;
  font-size: 1em;
  margin: 0.25em auto 0 0.5rem;
  padding: 0.25em 1em;
  border: 2px solid #000000;
  border-radius: 7px;
  transition: 0.25s all ease-in;

  &:hover {
    color: #dc3545;
    border: 2px solid #dc3545;
  }
`

const BugComponent = () => {
  return <Button>แจ้งปัญหา</Button>
}

export default BugComponent

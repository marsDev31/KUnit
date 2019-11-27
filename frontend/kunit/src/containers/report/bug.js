import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  cursor: pointer;
  background: white;
  color: #888888;
  width: 8%;
  min-width: 100px;
  font-size: 1em;
  margin: 0.25em auto 0 0.5rem;
  padding: 0.25em 1em;
  border: 2px solid #888888;
  border-radius: 7px;
  transition: 0.25s all ease-in;
  text-decoration: none;

  &:hover {
    color: #dc3545;
    border: 2px solid #dc3545;
    text-decoration: none;
  }
`

const BugComponent = () => {
  return (
    <Button href="http://m.me/marsdev31" target="_blank">
      แจ้งปัญหา
    </Button>
  )
}

export default BugComponent

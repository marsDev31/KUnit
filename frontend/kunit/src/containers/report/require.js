import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  background: white;
  color: black;
  width: 14%;
  min-width: 180px;
  font-size: 1em;
  margin: 0.25em 0.5rem 0 auto;
  padding: 0.25em 1em;
  border: 2px solid #000000;
  border-radius: 7px;
  transition: 0.25s all ease-in;

  &:hover {
    color: #30803d;
    border: 2px solid #77b28f;
  }
`

const RequireComponent = () => {
  return <Button>อยากได้อะไรบอกเราสิ</Button>
}

export default RequireComponent

import React, { useContext } from 'react'
import styled from 'styled-components'
import { ShowRequestFormContext } from '../../utility/context/modal_request'

const Button = styled.button`
  cursor: pointer;
  background: white;
  color: #888888;
  width: 14%;
  min-width: 180px;
  font-size: 1em;
  margin: 0.25em 0.5rem 0 auto;
  padding: 0.25em 1em;
  border: 2px solid #888888;
  border-radius: 7px;
  transition: 0.25s all ease-in;

  &:hover {
    color: #30803d;
    border: 2px solid #77b28f;
  }
`

const RequireComponent = () => {
  const { dispatch } = useContext(ShowRequestFormContext)
  return (
    <Button onClick={() => dispatch({ type: 'open' })}>
      ช่วยเพิ่มข้อมูลที่ตกหล่น
    </Button>
  )
}

export default RequireComponent

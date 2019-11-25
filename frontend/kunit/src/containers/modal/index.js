import React from 'react'
import styled from 'styled-components'
import Major from './major_form'
import Class from './class_form'

const BackDrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  background: rgba(0, 0, 0, 0.64);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const Card = styled.div`
  width: 80%;
  min-width: 320px;
  max-width: 500px;
  height: 80%;
  background: white;
  border-radius: 7px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`

const Header = styled.h1`
  font-size: 1.2rem;
`

const ModalCaontainer = () => {
  return (
    <BackDrop>
      <Card>
        {/* <Major /> */}
        <Class />
      </Card>
    </BackDrop>
  )
}

export default ModalCaontainer

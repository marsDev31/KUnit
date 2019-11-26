import React from 'react'
import styled, { css } from 'styled-components'
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
  max-height: 400px;
  background: white;
  border-radius: 7px;
  border-top-left-radius: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
`

const TabBehavior = styled.div`
  position: absolute;
  width: 120px;
  height: 40px;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const TabClass = styled(TabBehavior)`
  background: white;
  top: -40px;
  left: 0;
  font-size: 1.05rem;
  z-index: 3;
`

const TabMajor = styled(TabBehavior)`
  background: #e8e8e8;
  top: -40px;
  left: 118px;
  font-size: 1rem;
  z-index: 2;
`

const ModalCaontainer = () => {
  return (
    <BackDrop>
      <Card>
        <TabClass>เพิ่มวิชาใหม่</TabClass>
        <TabMajor>เพิ่มภาควิชาใหม่</TabMajor>
        {/* <Major /> */}
        <Class />
      </Card>
    </BackDrop>
  )
}

export default ModalCaontainer

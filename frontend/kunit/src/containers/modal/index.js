import React, { useState } from 'react'
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
  min-width: 366px;
  max-width: 500px;
  /* height: 80%;
  max-height: 440px; */
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
  width: 128px;
  height: 40px;
  top: -39px;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const TabClass = styled(TabBehavior)`
  background: ${props => (props.section === 0 ? 'white' : '#e8e8e8')};
  left: 0;
  font-size: 1.05rem;
  z-index: ${props => (props.section === 0 ? '3' : '2')};
`

const TabMajor = styled(TabBehavior)`
  background: ${props => (props.section === 1 ? 'white' : '#e8e8e8')};
  left: 120px;
  font-size: 1rem;
  z-index: ${props => (props.section === 1 ? '3' : '2')};
`

const TabLine = styled.div`
  width: 256px;
  height: 2px;
  position: absolute;
  z-index: 4;
  background: white;
  top: 0;
  left: 0;
`

const GroupFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
  /* position: absolute;
  bottom: 2rem;
  right: 2rem; */
`

const Button = styled.button`
  background: white;
  color: #000;
  width: 14%;
  min-width: 120px;
  font-size: 1em;
  margin: 0.25em 0 0 0.4rem;
  padding: 0.25em 1em;
  border: 2px solid #000;
  border-radius: 7px;
  transition: 0.2s all ease-in;

  &:hover {
    color: ${props => props.color_hover || '#30803d'};
    border: 2px solid ${props => props.color_hover || '#77b28f'};
    cursor: pointer;
  }
`

const ModalCaontainer = () => {
  const [section, setSection] = useState(0)

  return (
    <BackDrop>
      <Card>
        <TabClass onClick={() => setSection(0)} section={section}>
          เพิ่มวิชาใหม่
        </TabClass>
        <TabMajor onClick={() => setSection(1)} section={section}>
          เพิ่มภาควิชาใหม่
        </TabMajor>
        <TabLine />
        {
          {
            1: <Major />,
            0: <Class />,
          }[section]
        }
        <GroupFooter>
          <Button color_hover="#dc3545">ยกเลิก</Button>
          <Button>กดยืนยัน</Button>
        </GroupFooter>
      </Card>
    </BackDrop>
  )
}

export default ModalCaontainer

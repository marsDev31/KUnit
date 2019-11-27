import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Major from './major_form'
import Class from './class_form'
import ic_cancel_white from '../../assets/icon/ic_cancel_white.svg'
import Alert from './alert'
import { ShowRequestFormContext } from '../../utility/context/modal_request'
import media from 'styled-media-query'

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
  cursor: url(${ic_cancel_white}) 205 205, auto;
`

const Card = styled.div`
  width: 88%;
  min-width: 320px;
  max-width: 500px;
  background: white;
  border-radius: 7px;
  border-top-left-radius: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: auto;

  ${media.lessThan('360px')`
    min-width: 308px;
    padding: .75rem;
  `}
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
  left: 128px;
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

const ModalCaontainer = () => {
  const [section, setSection] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const { state, dispatch } = useContext(ShowRequestFormContext)
  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      dispatch({ type: 'close' })
      setIsDone(false)
    }
  }
  return (
    <>
      {state.showRequestForm ? (
        <BackDrop onClick={handleBackdrop}>
          {isDone ? (
            <Alert dispatch={dispatch} setIsDone={setIsDone} />
          ) : (
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
                  1: <Major dispatch={dispatch} setIsDone={setIsDone} />,
                  0: <Class dispatch={dispatch} setIsDone={setIsDone} />,
                }[section]
              }
            </Card>
          )}
        </BackDrop>
      ) : null}
    </>
  )
}

export default ModalCaontainer

import React, { useState } from 'react'
import styled from 'styled-components'

const InputName = styled.input`
  width: ${props => props.width || '100%'};
  min-width: ${props => props.width || '140px'};
  height: 2rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  font-size: 14px;
  padding: 0.5rem;
  margin: ${props => props.margin || '0.25rem 1rem 0.75rem 0'};
  text-transform: ${props => props.text_transform || ' initial'};
  text-align: ${props => props.text_align || 'initial'};
`

const GroupLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const Topic = styled.h3`
  font-size: 1rem;
  margin: 0;
`

const MajorForm = () => {
  return (
    <>
      <Topic> ชื่อภาควิชา (ภาษาไทย)</Topic>
      <InputName type="text" placeholder="วิศวกรรมคอมพิวเตอร์" autoFocus />
      <Topic> ชื่อภาควิชา (ภาษาอังกฤษ)</Topic>
      <InputName
        type="text"
        placeholder="Computer Engineering Faculty of Engineering"
      />
      <GroupLine>
        <Topic> รหัสภาควิชา</Topic>
        <InputName
          type="text"
          placeholder="E09"
          width="5ch"
          text_transform="uppercase"
          margin="auto auto auto .5rem"
          text_align="center"
        />
      </GroupLine>
    </>
  )
}

export default MajorForm

import React, { useState } from 'react'
import styled from 'styled-components'
import Select from 'react-virtualized-select'

const options = [
  {
    value: '0',
    label: 'กลุ่มอยู่ดีมีสุข',
  },
  {
    value: '1',
    label: 'กลุ่มศาสตร์แห่งผู้ประกอบการ',
  },
  {
    value: '2',
    label: 'กลุ่มพลเมืองไทยและพลเมืองโลก',
  },
  {
    value: '3',
    label: 'กลุ่มภาษากับการสื่อสาร',
  },
  {
    value: '4',
    label: 'กลุ่มสุนทรียศาสตร์',
  },
]

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
  margin-bottom: 0.75rem;
`

const Topic = styled.h3`
  white-space: nowrap;
  font-size: 1rem;
  margin: 0;
  span {
    font-size: 0.7rem;
    font-weight: 200;
    color: #666;
  }
`

const SelectCustom = styled(Select)`
  width: 100%;
`

const ClassForm = () => {
  const [Group, setGroup] = useState('เลือกกลุ่มสาระของวิชา')
  const handleChangeGroup = e => {
    setGroup(e.label)
  }

  return (
    <>
      <Topic> ชื่อวิชา (ภาษาไทย)</Topic>
      <InputName type="text" placeholder="เทนนิสเพื่อสุขภาพ" autoFocus />
      <Topic> ชื่อวิชา (ภาษาอังกฤษ)</Topic>
      <InputName type="text" placeholder="Tennis for Health" />
      <GroupLine>
        <Topic>รหัสวิชา</Topic>
        <InputName
          type="text"
          placeholder="01175113"
          width="8ch"
          margin="auto 1rem auto .5rem"
          text_align="center"
        />
        <SelectCustom
          name="major"
          value={Group}
          placeholder={Group}
          onChange={handleChangeGroup}
          options={options}
          // filterOptions={filterOptions}
        />
      </GroupLine>
      <GroupLine>
        <Topic>หน่วยกิต</Topic>
        <InputName
          type="text"
          placeholder="1"
          width="3ch"
          margin="auto 1rem auto .5rem"
          text_align="center"
        />
        <Topic>
          ชั่วโมง<span> (lecture-lab-self)</span>
        </Topic>
        <InputName
          type="text"
          placeholder="0-2-1"
          width="6ch"
          margin="auto auto auto .5rem"
          text_align="center"
        />
      </GroupLine>
    </>
  )
}

export default ClassForm

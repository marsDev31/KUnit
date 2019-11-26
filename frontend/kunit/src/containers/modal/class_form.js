import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import styled from 'styled-components'
import Select from 'react-virtualized-select'
import media from 'styled-media-query'
import axios from 'axios'

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

const GroupReCaptcha = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
`

const Topic = styled.h3`
  white-space: nowrap;
  font-size: 1rem;
  margin: 0;
  span {
    font-size: 0.7rem;
    font-weight: 200;
    color: #666;

    ${media.lessThan('medium')`
        display: none;
    `}
  }
`

const SelectCustom = styled(Select)`
  width: 100%;
`

const ClassForm = () => {
  const [isCaptcha, setIsCaptcha] = useState('')
  const [value, setValue] = useState({
    class_group: 'เลือกกลุ่มสาระของวิชา',
    name_th: '',
    name_en: '',
    code: '',
    unit: '',
    hours: '', 
  })

  const handleChangeGroup = (key, e) => {
    setValue({ ...value, [key]: e.label })
  }

  // .slice(0, 5)

  const handleOnChange = (key, e) => {
    switch (key) {
      case 'code': {
        if (/^[0-9]*$/.test(e.target.value) && e.target.value.length <= 8)
          setValue({ ...value, [key]: e.target.value })
        break
      }
      case 'unit': {
        if (/^[1-9]*$/.test(e.target.value) && e.target.value.length <= 1)
          setValue({ ...value, [key]: e.target.value })
        break
      }
      case 'hours': {
        if (
          // .replace(/\D/g, '') for strip all of non-digit
          e.target.value.replace(/\D/g, '').length <= 3
        )
          setValue({
            ...value,
            [key]: e.target.value
              .replace(/\D/g, '')
              .replace(/(\d{1})(\d{1})(\d{1})/, '$1-$2-$3'), // word size 1 char be insert by '-'
          })

        break
      }
      default: {
        setValue({ ...value, [key]: e.target.value })
        break
      }
    }
  }

  const onChange = value => {
    console.log('Captcha value:', value)
  }

  return (
    <>
      <Topic> ชื่อวิชา (ภาษาไทย)</Topic>
      <InputName
        type="text"
        placeholder="เทนนิสเพื่อสุขภาพ"
        onChange={e => handleOnChange('name_th', e)}
        value={value.name_th}
        autoFocus
      />
      <Topic> ชื่อวิชา (ภาษาอังกฤษ)</Topic>
      <InputName
        type="text"
        placeholder="Tennis for Health"
        onChange={e => handleOnChange('name_en', e)}
        value={value.name_en}
      />
      <GroupLine>
        <Topic>รหัสวิชา</Topic>
        <InputName
          type="text"
          placeholder="01175113"
          width="8ch"
          margin="auto 1rem auto .5rem"
          text_align="center"
          onChange={e => handleOnChange('code', e)}
          value={value.code}
        />
        <SelectCustom
          name="major"
          value={value.class_group}
          placeholder={value.class_group}
          onChange={e => handleChangeGroup('class_group', e)}
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
          onChange={e => handleOnChange('unit', e)}
          value={value.unit}
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
          onChange={e => handleOnChange('hours', e)}
          value={value.hours}
        />
      </GroupLine>
      <GroupReCaptcha>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITEKET_CLIENT}
          onChange={onChange}
        />
      </GroupReCaptcha>
    </>
  )
}

export default ClassForm

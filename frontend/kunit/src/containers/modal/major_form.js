import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
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

const GroupReCaptcha = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
`

const Topic = styled.h3`
  font-size: 1rem;
  margin: 0;
`

const MajorForm = () => {
  const [isCaptcha, setIsCaptcha] = useState('')
  const [value, setValue] = useState({
    name_major_th: '',
    name_major_en: '',
    code_major: '',
  })

  const handleOnChange = (key, e) => {
    switch (key) {
      case 'code_major': {
        if (e.target.value.length <= 3)
          setValue({ ...value, [key]: e.target.value })
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
      <Topic> ชื่อภาควิชา (ภาษาไทย)*</Topic>
      <InputName
        type="text"
        placeholder="วิศวกรรมคอมพิวเตอร์"
        value={value.name_major_th}
        onChange={e => handleOnChange('name_major_th', e)}
      />
      <Topic> ชื่อภาควิชา (ภาษาอังกฤษ)*</Topic>
      <InputName
        type="text"
        placeholder="Computer Engineering Faculty of Engineering"
        value={value.name_major_en}
        onChange={e => handleOnChange('name_major_en', e)}
      />
      <GroupLine>
        <Topic> รหัสภาควิชา*</Topic>
        <InputName
          type="text"
          placeholder="E09"
          width="5ch"
          text_transform="uppercase"
          margin="auto auto auto .5rem"
          text_align="center"
          value={value.code_major}
          onChange={e => handleOnChange('code_major', e)}
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

export default MajorForm

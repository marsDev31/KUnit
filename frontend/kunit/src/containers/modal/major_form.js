import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import styled from 'styled-components'
import axios from 'axios'
import media from 'styled-media-query'

const InputName = styled.input`
  width: ${props => props.width || '100%'};
  min-width: ${props => props.width || '140px'};
  height: 2rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  font-size: 14px;
  padding: 0.5rem;
  margin: ${props => props.margin || '0.25rem 1rem 1.25rem 0'};
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

  & div.rc-anchor-normal {
    margin: auto;
  }
`

const Topic = styled.h3`
  font-size: 1rem;
  margin: 0;
  &.require {
    ::after {
      content: ' *';
      color: #c97e7f;
      font-size: 16px;
    }
  }
`

const GroupFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;

  ${media.lessThan('447px')` 
    justify-content: space-around;
    margin: .5rem 0 .75rem 0 ;
  `}
`

const ReCAPTCHACustom = styled(ReCAPTCHA)`
  margin: 2rem auto;
  & div > div {
    width: 100% !important;
  }
  ${media.lessThan('447px')` 
    & iframe { 
      width: 104% !important;
    }
  `}
`

const Button = styled.button`
  background: white;
  color: #000;
  width: 14%;
  min-width: 120px;
  font-size: 1em;
  margin: 0.25em 0 0 1rem;
  padding: 0.25em 1em;
  border: 2px solid #000;
  border-radius: 7px;
  transition: 0.2s all ease-in;

  &:hover {
    color: ${props => props.color_hover || '#30803d'};
    border: 2px solid ${props => props.color_hover || '#77b28f'};
    cursor: pointer;
  }

  ${media.lessThan('360px')`
    margin: 0;
  `}
`

const Spinner = styled.div`
  & div.spinner-border {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const MajorForm = props => {
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState('')
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
  const postData = async () => {
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API_URL}/newUpdateRequest`,
        {
          verify_captcha: captcha,
          name_major_th: value.name_major_th,
          name_major_en: value.name_major_en,
          code_major: value.code_major,
        }
      )
      setLoading(false)
      props.setIsDone(true)
      setValue({
        name_major_th: '',
        name_major_en: '',
        code_major: '',
      })
      setCaptcha('')
    } catch (error) {
      console.log(error)
    }
  }

  const submitdForm = e => {
    // console.log(isCaptcha)
    if (
      value.name_major_th !== '' &&
      value.name_major_en !== '' &&
      value.code_major !== ''
    ) {
      if (captcha) {
        postData()
        setLoading(true)
      } else alert('โปรดยืนยัน reCAPTCHA')
    } else {
      alert('ข้อมูลไม่ครบถ้วนครับ/ค่ะ')
    }
  }

  const onChangeRecaptcha = value => {
    // console.log('Captcha value:', value)
    setCaptcha(value)
  }

  return (
    <>
      <Topic className="require"> ชื่อภาควิชา (ภาษาไทย)</Topic>
      <InputName
        type="text"
        placeholder="วิศวกรรมคอมพิวเตอร์"
        value={value.name_major_th}
        onChange={e => handleOnChange('name_major_th', e)}
      />
      <Topic className="require"> ชื่อภาควิชา (ภาษาอังกฤษ)</Topic>
      <InputName
        type="text"
        placeholder="Computer Engineering Faculty of Engineering"
        value={value.name_major_en}
        onChange={e => handleOnChange('name_major_en', e)}
      />
      <GroupLine>
        <Topic className="require"> รหัสภาควิชา</Topic>
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
      {/* <GroupReCaptcha> */}
      <ReCAPTCHACustom
        sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITEKET_CLIENT}
        onChange={onChangeRecaptcha}
      />
      {/* </GroupReCaptcha> */}
      <GroupFooter>
        <Button
          color_hover="#dc3545"
          onClick={() => props.dispatch({ type: 'close' })}
        >
          ยกเลิก
        </Button>
        <Button onClick={submitdForm}>
          {loading ? (
            <Spinner>
              <div class="spinner-border text-Spinner" />
            </Spinner>
          ) : (
            'กดยืนยัน'
          )}
        </Button>
      </GroupFooter>
    </>
  )
}

export default MajorForm

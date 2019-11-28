import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import styled from 'styled-components'
import axios from 'axios'
import media from 'styled-media-query'

const InputName = styled.input`
  width: ${props => props.width || '100%'};
  min-width: ${props => props.width || '140px'};
  height: 2rem;
  border: 1px solid ${props => props.color_border || '#ced4da'};
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
  justify-content: space-around;
  align-items: center;
  margin: auto;

  ${media.lessThan('447px')` 
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

  ${media.lessThan('420px')`
    margin: 0;
  `}
`

const Spinner = styled.div`
  & div.spinner-border {
    width: 1.5rem;
    height: 1.5rem;
  }
`

const ContainerTextAlert = styled.p`
  margin: -1rem auto 0.7rem auto;
  height: 1rem;
`
const TextAlertDetail = styled.p`
  font-size: 0.8rem;
  color: #000;
  span {
    color: #ce7678;
  }
`

const TextAlertError = styled.p`
  font-size: 0.8rem;
  color: #ce7678;
`

const MajorForm = props => {
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState('')
  const [submited, setSubmited] = useState(false)
  const [iAmBot, setIAmBot] = useState(true)
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
    setIAmBot(true)
    if (
      value.name_major_th !== '' &&
      value.name_major_en !== '' &&
      value.code_major !== ''
    ) {
      if (captcha) {
        postData()
        setLoading(true)
        setSubmited(false)
        setIAmBot(false)
      } else {
        setIAmBot(true)
      }
    } else {
      setSubmited(true)
      setIAmBot(false)
      // alert('ข้อมูลไม่ครบถ้วนครับ/ค่ะ')
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
        color_border={
          submited
            ? value.name_major_th === ''
              ? '#ce7678'
              : '#ced4da'
            : '#ced4da'
        }
      />
      <Topic className="require"> ชื่อภาควิชา (ภาษาอังกฤษ)</Topic>
      <InputName
        type="text"
        placeholder="Computer Engineering Faculty of Engineering"
        value={value.name_major_en}
        onChange={e => handleOnChange('name_major_en', e)}
        color_border={
          submited
            ? value.name_major_en === ''
              ? '#ce7678'
              : '#ced4da'
            : '#ced4da'
        }
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
          color_border={
            submited
              ? value.code_major === ''
                ? '#ce7678'
                : '#ced4da'
              : '#ced4da'
          }
        />
      </GroupLine>

      <ReCAPTCHACustom
        sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITEKET_CLIENT}
        onChange={onChangeRecaptcha}
      />
      <ContainerTextAlert>
        {submited ? (
          <TextAlertError>
            {iAmBot
              ? '** โปรดยืนยัน reCAPTCHA'
              : '** โปรดกรอกข้อมูลให้ครบครับ/ค่ะ'}
          </TextAlertError>
        ) : (
          <TextAlertDetail>
            เครื่องหมาย <span>*</span> คือจำเป็นต้องกรอก
          </TextAlertDetail>
        )}
      </ContainerTextAlert>
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

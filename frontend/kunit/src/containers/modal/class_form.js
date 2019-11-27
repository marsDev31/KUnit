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
  border: 1px solid ${props => props.color_border || '#ced4da'};
  border-radius: 0.25rem;
  font-size: 14px;
  padding: 0.5rem;
  margin: ${props => props.margin || '0.25rem 1rem 1.25rem 0'};

  ${media.lessThan('360px')`
    margin: ${props => props.margin || '0.25rem 1rem 0.75rem 0'};
  `}

  text-transform: ${props => props.text_transform || ' initial'};
  text-align: ${props => props.text_align || 'initial'};
`

const GroupWrap = styled.div`
  display: flex;
  align-items: center;
  &.unit_section {
    ${media.lessThan('447px')` 
    margin-bottom: 1.25rem;
  `}
    ${media.lessThan('360px')`
    margin-bottom: 0.75rem;
  `}
  }
  ${media.lessThan('360px')`
    margin-bottom: 0.75rem;
  `}
`

const GroupLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: ${props => props.margin || '0 auto 1.25rem auto'};

  &.unit_section {
    ${media.lessThan('447px')` 
    flex-direction: column;
    align-items: flex-start;
  `}
  }
  /* 360px */
  ${media.lessThan('360px')` 
    flex-direction: column;
    align-items: flex-start;
    margin: ${props => props.margin || '0 auto 0.75rem auto'};
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
    margin: 0.25rem auto;
  `}

  ${media.lessThan('360px')`
    margin: 0.15rem auto;
  `}
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
  &.require {
    ::after {
      content: ' *';
      color: #c97e7f;
      font-size: 16px;
    }
  }
`

const SelectCustom = styled(Select)`
  width: 100%;
  height: 2rem;
  font-size: 14px;
  & div.Select-control {
    height: 2rem;
    border-color: ${props => props.color_border || '#ced4da'};
  }
  & div.Select-input {
    height: 2rem;
  }
  & div.Select-placeholder {
    line-height: 2rem;
    ::after {
      content: ' *';
      ${props =>
        props.group !== 'เลือกกลุ่มสาระของวิชา' &&
        `content: '';
        `}
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
    margin: .5rem 0 0 0 ;
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

const ContainerTextAlert = styled.p`
  margin: 0.5rem auto 0.7rem auto;
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

const ClassForm = props => {
  const [loading, setLoading] = useState(false)
  const [captcha, setCaptcha] = useState('')
  const [submited, setSubmited] = useState(false)
  const [iAmBot, setIAmBot] = useState(true)
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

  const handleOnChange = (key, e) => {
    // setSubmited(false)
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

  const onChangeRecaptcha = value => {
    // console.log('Captcha value:', value)
    setCaptcha(value)
  }

  const postData = async () => {
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API_URL}/newUpdateRequest`,
        {
          verify_captcha: captcha,
          class_group: value.class_group,
          name_th: value.name_th,
          name_en: value.name_en,
          code: value.code,
          unit: value.unit,
          hours: value.hours,
        }
      )
      setLoading(false)
      props.setIsDone(true)
      setValue({
        class_group: 'เลือกกลุ่มสาระของวิชา',
        name_th: '',
        name_en: '',
        code: '',
        unit: '',
        hours: '',
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
      value.class_group !== 'เลือกกลุ่มสาระของวิชา' &&
      value.name_th !== '' &&
      value.name_en !== '' &&
      value.code !== '' &&
      value.unit !== ''
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

  return (
    <>
      <Topic className="require"> ชื่อวิชา (ภาษาไทย)</Topic>
      <InputName
        type="text"
        placeholder="เทนนิสเพื่อสุขภาพ"
        onChange={e => handleOnChange('name_th', e)}
        value={value.name_th}
        color_border={
          submited ? (value.name_th === '' ? '#ce7678' : '#ced4da') : '#ced4da'
        }
      />
      <Topic className="require"> ชื่อวิชา (ภาษาอังกฤษ)</Topic>
      <InputName
        type="text"
        placeholder="Tennis for Health"
        onChange={e => handleOnChange('name_en', e)}
        value={value.name_en}
        color_border={
          submited ? (value.name_en === '' ? '#ce7678' : '#ced4da') : '#ced4da'
        }
      />
      <GroupLine>
        <GroupWrap>
          <Topic className="require">รหัสวิชา</Topic>
          <InputName
            type="text"
            placeholder="01175113"
            width="8ch"
            margin="auto 1rem auto .5rem"
            text_align="center"
            onChange={e => handleOnChange('code', e)}
            value={value.code}
            color_border={
              submited ? (value.code === '' ? '#ce7678' : '#ced4da') : '#ced4da'
            }
          />
        </GroupWrap>
        <SelectCustom
          group={value.class_group}
          name="major"
          value={value.class_group}
          placeholder={value.class_group}
          onChange={e => handleChangeGroup('class_group', e)}
          options={options}
          color_border={
            submited
              ? value.class_group === 'เลือกกลุ่มสาระของวิชา'
                ? '#ce7678'
                : '#ced4da'
              : '#ced4da'
          }
        />
      </GroupLine>
      <GroupLine margin="0" className="unit_section">
        <GroupWrap className="unit_section">
          <Topic className="require">จำนวนหน่วยกิต</Topic>
          <InputName
            type="text"
            placeholder="0"
            width="3ch"
            margin="auto 1rem auto .5rem"
            text_align="center"
            onChange={e => handleOnChange('unit', e)}
            value={value.unit}
            color_border={
              submited ? (value.unit === '' ? '#ce7678' : '#ced4da') : '#ced4da'
            }
          />
        </GroupWrap>
        <GroupWrap className="unit_section">
          <Topic>
            จำนวนชั่วโมง<span> (lecture-lab-self)</span>
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
        </GroupWrap>
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

export default ClassForm

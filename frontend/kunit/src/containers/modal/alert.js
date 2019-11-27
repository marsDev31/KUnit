import React from 'react'
import styled from 'styled-components'
import iconDone from '../../assets/icon/done_green.svg'
import 'animate.css'

const Card = styled.div`
  width: 370px;
  background: transparent;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Done = styled.img`
  width: 150px;
`

const Thankyou = styled.p`
  color: #77b28f;
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  margin-bottom: 0.3rem;
`

const Text = styled.p`
  color: white;
  font-size: 0.8rem;
  white-space: nowrap;
  margin-bottom: 2rem;
`

const AlertComponent = () => {
  return (
    <Card>
      <Done src={iconDone} className="bounceIn" />
      <Thankyou>ขอบคุณสำหรับข้อมูลเพิ่มเติมครับ/ค่ะ</Thankyou>
      <Text>( แตะหนึ่งครั้งเพื่อปิด )</Text>
    </Card>
  )
}

export default AlertComponent

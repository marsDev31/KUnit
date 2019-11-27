import React, { useState, useEffect, useRef } from 'react'
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

const TextCount = styled.p`
  color: white;
  font-size: 1rem;
  white-space: nowrap;
  margin-bottom: 2rem;
`

const Text = styled.p`
  color: white;
  font-size: 0.8rem;
  white-space: nowrap;
  margin-bottom: 2rem;
`

const AlertComponent = props => {
  const [count, setCount] = useState(5)
  const saveCallback = useRef()

  const handleClose = () => {
    props.dispatch({ type: 'close' })
    props.setIsDone(false)
  }

  function callbackCount() {
    setCount(count - 1)
    console.log(count)
    if (count === 0) {
      handleClose()
    }
  }

  useEffect(() => {
    saveCallback.current = callbackCount
  })

  useEffect(() => {
    function tick() {
      saveCallback.current()
    }

    const timing = setInterval(tick, 1000)
    return () => clearInterval(timing)
  }, [])
  return (
    <Card onClick={handleClose}>
      <Done src={iconDone} className="bounceIn" />
      <Thankyou>ขอบคุณสำหรับข้อมูลเพิ่มเติมครับ/ค่ะ</Thankyou>
      <TextCount>จะปิดหน้านี้ในอีก {count} วินาที</TextCount>
      <Text>( แตะหนึ่งครั้งเพื่อปิด )</Text>
    </Card>
  )
}

export default AlertComponent

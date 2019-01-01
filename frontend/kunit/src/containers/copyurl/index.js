import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'styled-components'
import iconCopyURL from '../../assets/icon/copy.svg'
import iconDone from '../../assets/icon/done.svg'
import 'animate.css'
export default props => {
  const [clicked, setClicked] = useState(false)

  const Button = styled.div`
    cursor: pointer;
    background: 'white';
    color: 'black';
    width: 20%;
    min-width: 230px;
    font-size: 1.5em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: ${clicked ? '3px solid #1c9d82' : '2.7px solid black'};
    border-radius: 7px;
  `
  const Icon = styled.img`
    padding-left: 8px;
    width: 1.9em;
    height: auto;
  `
  const Suggest = styled.p`
    color: black;
    font-size: 15.5px;
    @media only screen and (max-width: 550px) {
      font-size: 12.6px;
    }
  `
  const SuggestDone = styled.p`
    color: #087861;
  `

  

  return (
    <div>
      <br />

      <span>
        <CopyToClipboard
          text={document.location.href}
          onCopy={() => setClicked(true)}
        >
          <Button>
            {clicked ? 'Done' : 'Copy URL'}{' '}
            {clicked ? (
              <Icon src={iconDone} className="bounceIn" />
            ) : (
              <Icon src={iconCopyURL} />
            )}
          </Button>
        </CopyToClipboard>

        {clicked ? (
          <SuggestDone>
            ** แนะนำ : Copy แล้วอย่าลืมเก็บ URL ไว้นะ ^-^
          </SuggestDone>
        ) : (
          <Suggest>
            ** แนะนำ : สามารถกดปุ่ม copy url เพื่อไปใช้ต่อในเทอมหน้าได้
          </Suggest>
        )}
      </span>
      <br />
    </div>
  )
}

import React, { useState } from 'react'
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

  const copyStringToClipboard = str => {
    const el = document.createElement('textarea') // Create a <textarea> element
    el.value = str // Set its value to the string that you want copied
    el.setAttribute('readonly', '') // Make it readonly to be tamper-proof
    el.style.position = 'absolute'
    el.style.left = '-9999px' // Move outside the screen to make it invisible
    document.body.appendChild(el) // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0 // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0) // Store selection if found
        : false // Mark as false to know no selection existed before
    el.select() // Select the <textarea> content
    document.execCommand('copy') // Copy - only works as a result of a user action (e.g. click events)
    document.body.removeChild(el) // Remove the <textarea> element
    if (selected) {
      // If a selection existed before copying
      document.getSelection().removeAllRanges() // Unselect everything on the HTML document
      document.getSelection().addRange(selected) // Restore the original selection
    }
  }

  return (
    <div>
      <br />

      <span>
        <Button
          onClick={() => {
            copyStringToClipboard(document.location.href)
            setClicked(true)
          }}
        >
          {clicked ? 'Done' : 'Copy URL'}{' '}
          {clicked ? (
            <Icon src={iconDone} className="bounceIn" />
          ) : (
            <Icon src={iconCopyURL} />
          )}
        </Button>

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

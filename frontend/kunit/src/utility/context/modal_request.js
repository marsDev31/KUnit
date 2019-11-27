import React, { useReducer, createContext } from 'react'

let reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { ...state, showRequestForm: !state.showRequestForm }
    case 'close':
      return { ...state, showRequestForm: false }
    case 'open':
      return { ...state, showRequestForm: true }
    default:
      return
  }
}

const initialState = { showRequestForm: false }
const ShowRequestFormContext = createContext(initialState)

const ShowRequestFormProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ShowRequestFormContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ShowRequestFormContext.Provider>
  )
}
export { ShowRequestFormContext, ShowRequestFormProvider }

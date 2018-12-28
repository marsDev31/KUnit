import React, { Component } from 'react'
import Search from './containers/seachth'
import MajorSearch from './containers/major'
import Header from './containers/header'
import Footer from './containers/footer'

import './assets/css/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      major: '',
    }
  }

  handleMajor = e => {
    this.setState({ major: e })
  }

  getParams = location => {
    const getURL = new URLSearchParams(location.search)
    // alert(getURL.get('major_value'))
    return {
      major_value: getURL.get('major_value') || '',
      major_label: getURL.get('major_label') || '',
    }
  }

  setParams = ({ major_value, major_label }) => {
    const setURL_value = new URLSearchParams()
    const setURL_label = new URLSearchParams()
    setURL_value.set('major_value', major_value || '')
    setURL_label.set('major_label', major_label || '')
    return setURL_value.toString() + '&' + setURL_label.toString()
  }

  getMajorChild = e => {
    const url = this.setParams({ major_value: e.value, major_label: e.label })
    this.props.history.push(`?${url}`)
  }

  render() {
    // console.log(location)
    const { location, history } = this.props
    const { major_value, major_label } = this.getParams(location)
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <center>
                <Header />
              </center>
            </div>
            <div className="col-md-1" />
          </div>
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <MajorSearch
                major={this.handleMajor}
                major_std={this.getMajorChild}
                major_value={major_value}
                major_label={major_label}
              />
            </div>
            <div className="col-md-1" />
          </div>
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <Search major={this.state.major} />
            </div>
            <div className="col-md-1" />
          </div>
        </div>
        <center>
          <Footer />
        </center>
      </div>
    )
  }
}

export default App

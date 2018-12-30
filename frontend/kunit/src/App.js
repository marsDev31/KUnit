import React, { Component } from 'react'
import MajorSearch from './containers/major'
import Search from './containers/seachth'
import Header from './containers/header'
import Footer from './containers/footer'
import ButtonCopyURL from './containers/copyurl'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/app.css'

/*eslint-disable*/
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

  getterParams = location => {
    const getURL = new URLSearchParams(location.search)
    return {
      major_value: getURL.get('major_value') || '',
      major_label: getURL.get('major_label') || '',
      group_class: getURL.get('group_class') || '',
      selected_class: getURL.get('selected_class') || '',
    }
  }
  setterParams = ({
    major_value,
    major_label,
    group_class,
    selected_class,
  }) => {
    const setURL_major_value = new URLSearchParams()
    const setURL_major_label = new URLSearchParams()
    const setURL_group_class = new URLSearchParams()
    const setURL_selected_class = new URLSearchParams()
    setURL_major_value.set('major_value', major_value || '')
    setURL_major_label.set('major_label', major_label || '')
    setURL_group_class.set('group_class', group_class || '0,1,2,3,4')
    setURL_selected_class.set('selected_class', selected_class || '')
    return (
      setURL_major_value.toString() +
      '&' +
      setURL_major_label.toString() +
      '&' +
      setURL_group_class.toString() +
      '&' +
      setURL_selected_class.toString()
    )
  }

  getMajorChild = e => {
    const {
      major_value,
      major_label,
      group_class,
      selected_class,
    } = this.getterParams(this.props.location)
    const url = this.setterParams({
      major_value: e.value,
      major_label: e.label,
      group_class,
      selected_class,
    })
    this.props.history.push(`?${url}`)
  }

  getGroupChild = e => {
    const {
      major_value,
      major_label,
      group_class,
      selected_class,
    } = this.getterParams(this.props.location)
    const url = this.setterParams({
      major_value,
      major_label,
      group_class: e.toString(),
      selected_class,
    })

    this.props.history.push(`?${url}`)
  }

  getClassSelectedChild = e => {
    const {
      major_value,
      major_label,
      group_class,
      selected_class,
    } = this.getterParams(this.props.location)
    const url = this.setterParams({
      major_value,
      major_label,
      group_class,
      selected_class: e.toString(),
    })
    //console.log('class', e.toString())
    //console.log('url', url)
    this.props.history.push(`?${url}`)
  }

  render() {
    const { location, history } = this.props
    const {
      major_value,
      major_label,
      group_class,
      selected_class,
    } = this.getterParams(location)
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
                major_get={this.getMajorChild}
                major_value={major_value}
                major_label={major_label}
              />
            </div>
            <div className="col-md-1" />
          </div>
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <Search
                major={this.state.major}
                selected_get={this.getClassSelectedChild}
                check_major_value={major_value}
                group_get={this.getGroupChild}
                group_class={group_class}
                selected_class={selected_class}
              />
            </div>
            <div className="col-md-1" />
          </div>
        </div>
        <center>
          <ButtonCopyURL location={this.props.location} />
          <Footer />
        </center>
      </div>
    )
  }
}

export default App

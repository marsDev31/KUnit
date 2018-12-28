import React, { Component } from 'react'
import Select from 'react-virtualized-select'
// import { Creatable } from 'react-select'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import Table from './components/table_th'
import Comment from './components/comment'
import all_subject_th from '../../data/gp_subject_th/all_subject_th'

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import '../../assets/css/search.css'
import 'react-toastify/dist/ReactToastify.css'

import MyJson from '../../data/json/long.json'
import MyJson_th from '../../data/json/thshort.json'

/*eslint-disable*/

class Search extends Component {
  constructor(props) {
    super(props)
    const group_class_options = [
      { value: '0', label: 'กลุ่มอยู่ดีมีสุข', data: all_subject_th.wellness },
      {
        value: '1',
        label: 'กลุ่มศาสตร์แห่งผู้ประกอบการ',
        data: all_subject_th.entrepreneurship,
      },
      {
        value: '2',
        label: 'กลุ่มพลเมืองไทยและพลเมืองโลก',
        data: all_subject_th.citizen,
      },
      {
        value: '3',
        label: 'กลุ่มภาษากับการสื่อสาร',
        data: all_subject_th.language,
      },
      {
        value: '4',
        label: 'กลุ่มสุนทรียศาสตร์',
        data: all_subject_th.aesthetics,
      },
    ]

    this.state = {
      showComponent: false,
      group_class_options,
      selectGroup: [
        group_class_options[0],
        group_class_options[1],
        group_class_options[2],
        group_class_options[3],
        group_class_options[4],
      ],
      selectedOption: '[[0,0,0,0,0,0],[],[],[],[],[]]',
      table: '[]',
      wordS: 'พิมพ์/เลือก วิชาที่ต้องการจะลง',
      programTable:
        '[{1:' +
        '"' +
        'กลุ่มสาระอยู่ดีมีสุข' +
        '"' +
        ',2:' +
        '"' +
        'ยังไม่ได้เลือกภาควิชา' +
        '"' +
        ',3:' +
        '0' +
        ',4:' +
        '"' +
        'ยังไม่ได้เลือกภาควิชา' +
        '"' +
        '},' +
        '{1:' +
        '"' +
        'กลุ่มสาระศาสตร์แห่งผู้ประกอบการ' +
        '"' +
        ',2:' +
        '"' +
        'ยังไม่ได้เลือกภาควิชา' +
        '"' +
        ',3:' +
        '0' +
        ',4:' +
        '"' +
        'ยังไม่ได้เลือกภาควิชา' +
        '"' +
        '},' +
        '{1:' +
        '"' +
        'กลุ่มสาระพลเมืองไทยและพลเมืองโลก' +
        '"' +
        ',2:' +
        '"' +
        'ยังไม่ได้เลือกภาควิชา' +
        '"' +
        ',3:' +
        '0' +
        ',4:' +
        '"' +
        'ยังไม่ได้เลือกภาควิชา' +
        '"' +
        '},' +
        '{1:' +
        '"' +
        'กลุ่มสาระภาษากับการสื่อสาร' +
        '"' +
        ',2:' +
        '"' +
        'ยังไม่ได้เลือกภาควิชา' +
        '"' +
        ',3:' +
        '0' +
        ',4:' +
        '"' +
        'ยังไม่ได้เลือกภาควิชา' +
        '"' +
        '},' +
        '{1:' +
        '"' +
        'กลุ่มสาระสุนทรียศาสตร์' +
        '"' +
        ',2:' +
        '"' +
        'ยังไม่ได้เลือกภาควิชา' +
        '"' +
        ',3:' +
        '0' +
        ',4:' +
        '"' +
        'ยังไม่ได้เลือกภาควิชา' +
        '"' +
        '},' +
        '{1:' +
        '"' +
        'รวมหน่วยกิต' +
        '"' +
        ',2:' +
        '"' +
        'ยังไม่ได้เลือกภาควิชา' +
        '"' +
        ',3:' +
        '0' +
        ',4:' +
        '"' +
        'ยังไม่ได้เลือกภาควิชา' +
        '"' +
        '}]',
      Major: [],
      coptions: [
        all_subject_th.wellness,
        all_subject_th.entrepreneurship,
        all_subject_th.citizen,
        all_subject_th.language,
        all_subject_th.aesthetics,
      ],
      options:
        all_subject_th.wellness +
        all_subject_th.entrepreneurship +
        all_subject_th.citizen +
        all_subject_th.language +
        all_subject_th.aesthetics,
      sumForall: [0, 0, 0, 0],
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleData = this.handleData.bind(this)
    this.major = this.major.bind(this)
    this.createTableCredit = this.createTableCredit.bind(this)
    this.handleChangeDelete = this.handleChangeDle.bind(this)
    this.handlePhase = this.handlePhase.bind(this)
  }
  componentDidUpdate() {
    if (this.props.major !== this.state.Major && this.props.major !== '') {
      // console.log(this.props.major)
      this.setState({ Major: this.props.major }, () => {
        this.createTableCredit()
      })
    }
  }

  handleChangeDle = e => {
    if (e !== '') {
      if (window.confirm('คุณต้องการจะลบวิชานี้หรือไม่')) {
        var Url =
          'https://kunit-backend.herokuapp.com/remove/' +
          this.state.selectedOption +
          'd' +
          e
        var xmlHttp = new XMLHttpRequest()
        xmlHttp.open('GET', Url, false)
        xmlHttp.send(null)
        var data = xmlHttp.responseText
          .replace('{"data" : ', '')
          .replace('}', '')
        this.setState({ selectedOption: data }, () => {
          this.handleData()
        })
      }
    }
  }

  major = e => {
    switch (e) {
      case '1':
        return 'กลุ่มสาระอยู่ดีมีสุข'
      case '2':
        return 'กลุ่มสาระศาสตร์แห่งผู้ประกอบการ'

      case '3':
        return 'กลุ่มสาระพลเมืองไทยและพลเมืองโลก'

      case '4':
        return 'กลุ่มสาระภาษากับการสื่อสาร'

      case '5':
        return 'กลุ่มสาระสุนทรียศาสตร์'
    }
  }

  handlePhase = (e1, e2, ar) => {
    if (ar >= 0 && ar <= 4) {
      var sum = e1 - e2
      var preph = this.state.sumForall
      if (sum > 0) {
        preph[ar] = sum
        this.setState({ sumForall: preph })
        return '"' + 'ขาดอีก ' + sum + ' หน่วยกิต' + '"'
      } else {
        if (e1 < 0) {
          preph[ar] = -1
          this.setState({ sumForall: preph })
          return '"' + 'ระบบเก่า/ไม่มีข้อมูล' + '"'
        } else {
          preph[ar] = 0
          this.setState({ sumForall: preph })
          return '"' + 'ลงทะเบียนครบแล้ว' + '"'
        }
      }
    } else {
      var sum = 0
      var i = 0
      for (i = 0; i <= 4; i++) {
        sum = sum + this.state.sumForall[i]
      }
      if (sum > 0) {
        return '"' + 'ขาดอีก ' + sum + ' หน่วยกิต' + '"'
      } else {
        if (e1 < 0) {
          return '"' + 'ระบบเก่า/ไม่มีข้อมูล' + '"'
        } else {
          return '"' + 'ลงทะเบียนครบแล้ว' + '"'
        }
      }
    }
  }

  Check = e => {
    if (e < 0) {
      return 'ระบบเก่า/ไม่มีข้อมูล'
    } else {
      return e
    }
  }
  createTableCredit = () => {
    // var Program= this.state.program
    var Wellness =
      '{1:' +
      '"' +
      'กลุ่มสาระอยู่ดีมีสุข' +
      '"' +
      ',2:' +
      '"' +
      this.Check(this.state.Major[0]) +
      '"' +
      ',3:' +
      '"' +
      eval(this.state.selectedOption)[0][1] +
      '"' +
      ',4:' +
      this.handlePhase(
        this.state.Major[0],
        eval(this.state.selectedOption)[0][1],
        0
      ) +
      '},'
    var Entrepreneurship =
      '{1:' +
      '"' +
      'กลุ่มสาระศาสตร์แห่งผู้ประกอบการ' +
      '"' +
      ',2:' +
      '"' +
      this.Check(this.state.Major[1]) +
      '"' +
      ',3:' +
      '"' +
      eval(this.state.selectedOption)[0][2] +
      '"' +
      ',4:' +
      this.handlePhase(
        this.state.Major[1],
        eval(this.state.selectedOption)[0][2],
        1
      ) +
      '},'
    var Thai =
      '{1:' +
      '"' +
      'กลุ่มสาระพลเมืองไทยและพลเมืองโลก' +
      '"' +
      ',2:' +
      '"' +
      this.Check(this.state.Major[2]) +
      '"' +
      ',3:' +
      '"' +
      eval(this.state.selectedOption)[0][3] +
      '"' +
      ',4:' +
      this.handlePhase(
        this.state.Major[2],
        eval(this.state.selectedOption)[0][3],
        2
      ) +
      '},'
    var Language =
      '{1:' +
      '"' +
      'กลุ่มสาระภาษากับการสื่อสาร' +
      '"' +
      ',2:' +
      '"' +
      this.Check(this.state.Major[3]) +
      '"' +
      ',3:' +
      '"' +
      eval(this.state.selectedOption)[0][4] +
      '"' +
      ',4:' +
      this.handlePhase(
        this.state.Major[3],
        eval(this.state.selectedOption)[0][4],
        3
      ) +
      '},'
    var Aesthetics =
      '{1:' +
      '"' +
      'กลุ่มสาระสุนทรียศาสตร์' +
      '"' +
      ',2:' +
      '"' +
      this.Check(this.state.Major[4]) +
      '"' +
      ',3:' +
      '"' +
      eval(this.state.selectedOption)[0][5] +
      '"' +
      ',4:' +
      this.handlePhase(
        this.state.Major[4],
        eval(this.state.selectedOption)[0][5],
        4
      ) +
      '},'
    var All =
      '{1:' +
      '"' +
      'รวมหน่วยกิต' +
      '"' +
      ',2:' +
      '"' +
      this.Check(
        this.state.Major[0] +
          this.state.Major[1] +
          this.state.Major[2] +
          this.state.Major[3] +
          this.state.Major[4]
      ) +
      '"' +
      ',3:' +
      '"' +
      eval(this.state.selectedOption)[0][0] +
      '"' +
      ',4:' +
      this.handlePhase(
        this.state.Major[0] +
          this.state.Major[1] +
          this.state.Major[2] +
          this.state.Major[3],
        eval(this.state.selectedOption)[0][0],
        5
      ) +
      '}'
    this.setState({
      programTable:
        '[' +
        Wellness +
        Entrepreneurship +
        Thai +
        Language +
        Aesthetics +
        All +
        ']',
    })
  }
  handleData = () => {
    var i
    var selected = eval(this.state.selectedOption)
    var newTablej = ''
    var newTablei = ''
    var len = selected.length

    for (i = 1; i < len; i++) {
      var j
      var len1 = selected[i].length

      for (j = 0; j < len1; j++) {
        var sub = selected[i][j]

        var subject =
          ',{subject:' +
          '"' +
          sub +
          ' ' +
          MyJson_th[sub][1] +
          ' (' +
          this.major(MyJson[sub][0]) +
          ')"'
        var credit =
          ',credit:' + '"' + MyJson[sub][3] + '(' + MyJson[sub][4] + ')' + '"'
        var by = ',by:' + '"' + MyJson_th[sub][3] + '"' + '}'

        newTablej = newTablej + subject + credit + by
      }

      newTablei = newTablei + newTablej
      newTablej = ''
    }
    this.setState({ table: '[' + newTablei + ']' })
    this.createTableCredit()
  }

  handleChange = e => {
    if (this.props.major == '') {
      toast.warn(' กรุณาเลือกภาควิชาก่อน', {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })

      // alert("กรุณาเลือกภาควิชาก่อนๆ")
    } else if (this.state.selectedOption.indexOf(e.value) == -1) {
      this.showComponent()
      this.setState({ wordS: e.label })
      var Url =
        'https://kunit-backend.herokuapp.com/add/' +
        this.state.selectedOption +
        'a' +
        e.value
      axios.get(Url).then(res => {
        this.setState({
          selectedOption: res.data.replace('{"data" : ', '').replace('}', ''),
        })
        this.handleData()
      })
    } else {
      toast.warn(' วิชานี้ถูกเลือกแล้ว', {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      // alert("วิชานี้ถูกเลือกแล้ว")
    }
  }
  showComponent = () => {
    this.setState({ showComponent: true })
  }
  handleChangeGroup = selectGroup => {
    this.setState({ selectGroup })
    this.changDataSelectGroup(selectGroup)
  }
  changDataSelectGroup = selectGroup => {
    var tmp_data = []
    for (var i = 0; i < selectGroup.length; i++) {
      tmp_data += selectGroup[i].data
    }
    this.setState({ options: tmp_data })
  }

  render() {
    const options = eval('[' + this.state.options + ']')
    let { selectedOption, selectGroup, group_class_options } = this.state
    const value = selectedOption && selectedOption.value

    return (
      <div>
        <p />
        <h3 style={{ fontSize: 18 }}>
          2. เลือกกลุ่มสาระที่ต้องการลง{' '}
          <span className="badge badge-light">
            ** default เลือกทั้งหมดไว้ให้ (ถ้าต้องการเลือกเฉพาะกลุ่มให้กด x
            ด้านขวาเพื่อเลือกใหม่)
          </span>{' '}
        </h3>

        <div className="Search">
          <Select
            name="gp_class"
            placeholder="พิมพ์/เลือก กลุ่มสาระที่ต้องการลงทะเบียน"
            multi={true}
            onChange={this.handleChangeGroup}
            options={group_class_options}
            // selectComponent={Creatable}
            value={selectGroup}
            style={{ fontSize: 14 }}
          />
        </div>

        <h3 style={{ fontSize: 18, paddingTop: 20 }}>
          3. เลือกวิชาที่ต้องการลงทะเบียน/วิชาที่ลงเรียนแล้ว
        </h3>
        <div className="Search">
          <Select
            name="subject"
            autosize={false}
            value={value}
            placeholder={this.state.wordS}
            onChange={this.handleChange}
            options={options}
            style={{ fontSize: 15 }}
          />
        </div>
        <br />
        <br />
        {this.state.showComponent ? (
          <Table
            hidden
            table={this.state.table}
            selectedOption={this.state.selectedOption}
            programTable={this.state.programTable}
            del={this.handleChangeDelete}
            major={this.props.major}
          />
        ) : null}
        <div style={{ paddingTop: 40 }} />
        {this.state.showComponent ? (
          <center>
            <Comment className="Facebook-comment" />
          </center>
        ) : null}
        <ToastContainer style={{ color: '#000' }} />
      </div>
    )
  }
}

export default Search

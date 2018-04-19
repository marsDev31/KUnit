import React, { Component } from 'react';
import Select from 'react-virtualized-select';
import createFilterOptions from 'react-select-fast-filter-options';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import './Search.css'
import axios from 'axios'
import Table from './table_th'
import MyJson from './long.json'
import MyJson_th from './THshort.json'
import wellness from './data/gp_subject_th/wellness_th'
import entrepreneurship from './data/gp_subject_th/entrepreneurship_th'
import citizen from './data/gp_subject_th/thai_citizen_th'
import language from './data/gp_subject_th/language_th'
import aesthetics from './data/gp_subject_th/aesthetics_th'
import all_subject_th from './data/gp_subject_th/all_subject_th.js'

class Search extends Component{
    constructor(props){
        super(props)
          this.state={
            selectedOption: "[[0,0,0,0,0,0],[],[],[],[],[]]",
            table: "[]",
            wordS: "พิมพ์/เลือก วิชาที่ต้องการจะลง",
            programTable: "[{1:" +  "\""+"กลุ่มสาระอยู่ดีมีสุข"+  "\""+",2:" +  "\""+"ยังไม่ได้เลือกภาควิชา"+  "\""+",3:" + "0" +",4:" +  "\""+"ยังไม่ได้เลือกภาควิชา"+  "\""+"},"+"{1:" +  "\""+"กลุ่มสาระศาสตร์แห่งผู้ประกอบการ"+  "\""+",2:" +  "\""+"ยังไม่ได้เลือกภาควิชา"+  "\""+",3:" + "0" +",4:" +  "\""+"ยังไม่ได้เลือกภาควิชา"+  "\""+"},"+"{1:" +  "\""+"กลุ่มสาระพลเมืองไทยและพลเมืองโลก"+  "\""+",2:" +  "\""+"ยังไม่ได้เลือกภาควิชา"+  "\""+",3:" +  "0"+",4:" +  "\""+"ยังไม่ได้เลือกภาควิชา"+  "\""+"},"+"{1:" +  "\""+"กลุ่มสาระภาษากับการสื่อสาร"+  "\""+",2:" +  "\""+"ยังไม่ได้เลือกภาควิชา"+  "\""+",3:" +  "0"+",4:" +  "\""+"ยังไม่ได้เลือกภาควิชา"+  "\""+"},"+"{1:" +  "\""+"กลุ่มสาระสุนทรียศาสตร์"+  "\""+",2:" +  "\""+"ยังไม่ได้เลือกภาควิชา"+  "\""+",3:" + "0"+",4:" +  "\""+"ยังไม่ได้เลือกภาควิชา"+  "\""+"},"+"{1:" +  "\""+"รวมหน่วยกิต"+  "\""+",2:" +  "\""+"ยังไม่ได้เลือกภาควิชา"+  "\""+",3:" +  "0"+",4:" +  "\""+"ยังไม่ได้เลือกภาควิชา"+  "\""+"}]",
        
           
          }
        this.handleChange=this.handleChange.bind(this)
        this.handleData=this.handleData.bind(this)
        this.major=this.major.bind(this)
        this.createTableCredit=this.createTableCredit.bind(this)
        this.handleChangeDelete=this.handleChangeDle.bind(this)
    }
    componentWillUpdate(){
        if (this.props.major !== this.state.Major){
                
            this.setState({Major : this.props.major},()=>{this.createTableCredit()})
            
            console.log(this.props.major)
        }  
    }
    
    handleChangeDle = (e) =>{
        
        if(e != ""){
            if(window.confirm('คุณต้องการจะลบวิชานี้หรือไม่')){
                var Url = "http://139.59.111.79:5000/remove/"+this.state.selectedOption+"d"+e
                var xmlHttp = new XMLHttpRequest()
                xmlHttp.open("GET",Url,false)
                xmlHttp.send(null)
                var data = xmlHttp.responseText.replace("{\"data\" : ", "").replace("}", "") 
                this.setState({selectedOption: data},()=>{this.handleData()})
            }
        }  
    }
    
    major = (e) =>{
        switch (e) {
            case "1":
                return "กลุ่มสาระอยู่ดีมีสุข"
                
            case "2":
                return "กลุ่มสาระศาสตร์แห่งผู้ประกอบการ"
                
            case "3":
                return "กลุ่มสาระพลเมืองไทยและพลเมืองโลก"
                
            case "4":
                return "กลุ่มสาระภาษากับการสื่อสาร"
                
            case "5":
                return "กลุ่มสาระสุนทรียศาสตร์"
                
            }
        
    }

    handlePhase = (e1,e2) => {
        var sum = e1-e2
        console.log(e1)
        console.log(e2)
        if(sum>0){
            return "\""+"ขาดอีก "+sum+" หน่วยกิต"+"\""
        }
        else{
            if(e1<0){
                return "\""+"ระบบเก่า/ไม่มีข้อมูล"+"\""
            }
            else{
            return  "\""+"ลงทะเบียนครบแล้ว"+"\""}
        }
    }

    Check = (e) => {
        if (e<0){
            return  "ระบบเก่า/ไม่มีข้อมูล"
        }
        else{
            return e
        }

    }
    createTableCredit = () =>{
        var Program= this.state.program
        var Wellness = "{1:" +  "\""+"กลุ่มสาระอยู่ดีมีสุข"+  "\""+",2:" +  "\""+this.Check(this.state.Major[0])+  "\""+",3:" +  "\""+eval(this.state.selectedOption)[0][1]+ "\""+",4:" +  this.handlePhase(this.state.Major[0],eval(this.state.selectedOption)[0][1]) +  "},"
        var Entrepreneurship = "{1:" +  "\""+"กลุ่มสาระศาสตร์แห่งผู้ประกอบการ"+  "\""+",2:" +  "\""+this.Check(this.state.Major[1])+  "\""+",3:" +  "\""+eval(this.state.selectedOption)[0][2]+ "\""+",4:" +  this.handlePhase(this.state.Major[1],eval(this.state.selectedOption)[0][2])+"},"
        var Thai = "{1:" +  "\""+"กลุ่มสาระพลเมืองไทยและพลเมืองโลก"+  "\""+",2:" +  "\""+this.Check(this.state.Major[2])+  "\""+",3:" +  "\""+eval(this.state.selectedOption)[0][3]+ "\""+",4:" +  this.handlePhase(this.state.Major[2],eval(this.state.selectedOption)[0][3])+"},"
        var Language = "{1:" +  "\""+"กลุ่มสาระภาษากับการสื่อสาร"+  "\""+",2:" +  "\""+this.Check(this.state.Major[3])+  "\""+",3:" +  "\""+eval(this.state.selectedOption)[0][4]+ "\""+",4:" +  this.handlePhase(this.state.Major[3],eval(this.state.selectedOption)[0][4])+"},"
        var Aesthetics = "{1:" +  "\""+"กลุ่มสาระสุนทรียศาสตร์"+  "\""+",2:" +  "\""+this.Check(this.state.Major[4])+  "\""+",3:" +  "\""+eval(this.state.selectedOption)[0][5]+ "\""+",4:" +  this.handlePhase(this.state.Major[4],eval(this.state.selectedOption)[0][5])+"},"
        var All = "{1:" +  "\""+"รวมหน่วยกิต"+  "\""+",2:" +  "\""+this.Check(this.state.Major[0]+this.state.Major[1]+this.state.Major[2]+this.state.Major[3])+  "\""+",3:" +  "\""+eval(this.state.selectedOption)[0][0]+ "\""+",4:" +  this.handlePhase(this.state.Major[0]+this.state.Major[1]+this.state.Major[2]+this.state.Major[3],eval(this.state.selectedOption)[0][0])+"}"
        this.setState({programTable: "["+Wellness+Entrepreneurship+Thai+Language+Aesthetics+All+"]"})
    }
    handleData = () =>{
        var i
        var selected = eval(this.state.selectedOption)
        var newTablej = ""
        var  newTablei ="" 
        var len = selected.length
        
        for (i = 1; i<len;i++){
            var j
            var len1 = selected[i].length
            
            for(j=0; j< len1;j++){
                
                var sub = selected[i][j]
                
                var subject = ",{subject:" + "\""+ sub+" "+ MyJson_th[sub][1] +" ("+ this.major(MyJson[sub][0]) + ")\""
                var credit = ",credit:" + "\""+ MyJson[sub][3] + "(" + MyJson[sub][4] + ")" + "\""
                var by = ",by:"+ "\"" + MyJson_th[sub][3]+ "\""+"}"
                
                newTablej  = newTablej+subject+credit+by
            }
            
            newTablei=newTablei+newTablej
            newTablej=""
            
        }
        this.setState({table : "["+newTablei+"]"})
        this.createTableCredit()
        
        
    }

    handleChange = (e) => {
        if (this.props.major==""){
            alert("กรุณาเลือกภาควิชาก่อนๆ")
        }
        else if (this.state.selectedOption.indexOf(e.value) == -1) {
            this.setState({wordS : e.label})
            var Url = "http://139.59.111.79:5000/add/"+this.state.selectedOption+"a"+e.value 
            axios.get(Url)
            .then(res =>{
            this.setState({selectedOption: res.data.replace("{\"data\" : ", "").replace("}", "") })
            this.handleData()   
            })
            
        }else{
            alert("วิชานี้ถูกเลือกแล้ว")
        }
    }
    
    
     
    render(){
    
    var test = require('./data/gp_subject_th/all_subject_th.js')
    var test2 = language.data
    var test3 = citizen.data
    console.log(eval("[,{value:"+"\""+"04804311"+"\""+",label:"+"\""+"04804311 ปรัชญาเศรษฐกิจพอเพียง"+"\""+"}]"))
    const options =eval("["+all_subject_th.wellness+all_subject_th.language+"]")
    let { selectedOption } = this.state
    const value = selectedOption && selectedOption.value;
		return(
        <div >
            <p/>
            <h3 className="subject-search">เลือกวิชาที่ต้องการลงทะเบียน</h3>
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
                <br/>
                
                <Table table={this.state.table} selectedOption={this.state.selectedOption} programTable={this.state.programTable} del={this.handleChangeDelete} major={this.props.major}/> 
        
		</div>
        );
    }
}

export default Search;

import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.css';
require('react-bootstrap-table-next/dist/react-bootstrap-table2.min.css');

class Table extends Component {
  constructor(props){
  	super(props)
		this.state={
        subject:"",
        checked:""
		}
    this.handleSetIndex=this.handleSetIndex.bind(this)
    this.handleChecked=this.handleChecked.bind(this)
    
  }

  componentDidUpdate(){
    if (this.state.checked == "del"){
      this.props.del(this.state.subject)
      this.setState({checked : ""})
    }else{ 
      this.props.del("")
    }
  }
  
  handleChecked = (e) =>{
      this.setState({checked:e})
    }
     
  handleSetIndex = (e) =>{
    this.setState({subject:e})
  }
  
  render()
  { 
    const rowEvents = {
      onClick: (e,row,rowIndex) => {
        this.handleSetIndex(row.subjectid)
    }}

	const columns = [{
    
      dataField: 'major',
      text: 'Group of Subjects'
    },{
      dataField: 'subject',
      text: 'Subject'
    },{
      dataField: 'subjectid',
      text: 'Subject Id'
    },{
      dataField: 'credit',
      text: 'Credit'
    },{
      dataField: 'by',
      text: 'From'
    },{
      events:{
        
        onClick: ()=>{this.handleChecked("del")
                     
      }
      },
      dataField: 'del',
      text:'Delete'
    }]
  
    const columns1 = [{
      dataField: "1",
      text: 'Group of Subjects'
    },{
      dataField: "2",
      text: 'Credits'
    }]
  
    
    return (
      <div>
        <h3>
          Subject you choose
        </h3>  
        <br/>
          <BootstrapTable keyField="subjectid"  data={eval(this.props.table) } rowEvents={rowEvents} columns={ columns }  tdStyle={ { whiteSpace: 'normal'}}/>
        <br/>
        <h3>
          Sum credit
        </h3>
        <br/>  
          <BootstrapTable keyField="1" isKey={true} data={eval(this.props.programTable)} columns={ columns1 }  tdStyle={ { whiteSpace: 'normal'}}/>
        <div>
          
        </div>
	  </div>
    );
  }
}

export default Table;

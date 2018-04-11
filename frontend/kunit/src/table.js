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
  
  handleChecked = (e) =>{
      this.setState({checked:e})
    }
    
  handleDel = () =>{
    
  }
   
  handleSetIndex = (e) =>{
    this.setState({subject:e})


  }
  
  render()
  { 
    const rowEvents = {
      onClick: (e,row,rowIndex) => {
        this.handleSetIndex(row.subject)
        
      }
      }
	const columns = [{
    
      dataField: 'major',
      text: 'All Subjects'
    },{
      dataField: 'subject',
      text: 'Subject'
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
    }
    ]

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
          <BootstrapTable keyField="subject"  data={eval(this.props.table) } rowEvents={rowEvents} columns={ columns }  tdStyle={ { whiteSpace: 'normal'}}/>
        <br/>
        <h3>
          Sum credit
        </h3>
        <br/>  
          <BootstrapTable keyField="1" isKey={true} data={eval(this.props.programTable)} columns={ columns1 }  tdStyle={ { whiteSpace: 'normal'}}/>
        <div>
          {this.handleDel()}
        </div>
	  </div>
    );
  }
}

export default Table;

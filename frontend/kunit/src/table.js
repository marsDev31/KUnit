import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.css';
import './Table.css'
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
    if (this.state.checked === "del"){
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
        this.handleSetIndex(row.subject.slice(0,8))
    }}

    function delSubject(cell,row,rowIndex){
      
      return(
        <button>
          Delete
        </button>
      )
    }

	const columns = [{
      dataField: 'subject',
      text: 'Subject',
      align: (column, colIndex) => 'left',
      headerAlign: (column, colIndex) => 'left'
    },{
      dataField: 'credit',
      text: 'Credit',
      align: (column, colIndex) => 'left',
      headerAlign: (column, colIndex) => 'left'
    },{
      dataField: 'by',
      text: 'From',
      align: (column, colIndex) => 'left',
      headerAlign: (column, colIndex) => 'left'
    },{
      events:{
        
        onClick: ()=>{this.handleChecked("del")
                     
      }
      },
      dataField: 'del',
      text: 'Delete',
      formatter: delSubject
      
    }]
  
    const columns1 = [{
      dataField: "1",
      text: 'Group of Subjects',
      align: (column, colIndex) => 'left',
      headerAlign: (column, colIndex) => 'left'
    },{
      dataField: "2",
      text: 'Credits',
      align: (column, colIndex) => 'left',
      headerAlign: (column, colIndex) => 'left'
    }]
  
    
    return (
      <div className="Table">
        <h3>
          Subject you choose
        </h3>  
        <br/>
          <BootstrapTable keyField="subject"  data={eval(this.props.table) } rowEvents={rowEvents} columns={ columns }  tdStyle={ { whiteSpace: 'normal'} } bodyStyle={{overflow: 'overlay'}} noDataIndication={ "No Subject add" } condensed striped bordered={ false }/>
        <br/>
        <h3>
          Sum credit
        </h3>
        <br/>  
          <BootstrapTable keyField="1" isKey={true} data={eval(this.props.programTable)} columns={ columns1 }  tdStyle={ { whiteSpace: 'normal'}} bodyStyle={{overflow: 'overlay'}} bordered={ false }/>
        <div>
        </div>
	  </div>
    );
  }
}

export default Table;

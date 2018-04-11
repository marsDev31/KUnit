import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.css';
require('react-bootstrap-table-next/dist/react-bootstrap-table2.min.css');

class Table extends Component {
  constructor(props){
  	super(props)
		this.state={
				selected:"[]"
		}
		this.handleSelected=this.handleSelected.bind(this)
  }

	handleSelected=(e) =>{
		var selectedBefore=this.state.selected
			
		this.setState({selected: selectedBefore.replace("]",",")+e+"]" })
  
  }
  
  render()
  { 
    const rowEvents = {
		mode: 'checkbox',	
		clickToSelect:true,	
		bgColor:"red"
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
      <BootstrapTable keyField="subject"  selectRow={rowEvents} data={eval(this.props.table) } columns={ columns } tdStyle={ { whiteSpace: 'normal'}}/>
      <br/>
      <h3>
        Sum credit
      </h3>
      <br/>  
      <BootstrapTable keyField="id" isKey={true} data={eval(this.props.programTable)} columns={ columns1 } tdStyle={ { whiteSpace: 'normal'}}/>
	  <div>
			 {this.state.selected}
	  </div>
      </div>
    );
  }
}

export default Table;

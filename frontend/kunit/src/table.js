import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.css';
require('react-bootstrap-table-next/dist/react-bootstrap-table2.min.css');

class Table extends Component {
  constructor(props){
  	super(props)
		this.state={
				selected:[]
		}
		this.handleSelected=this.handleSelected.bind(this)
  }

	handleSelected=(e) =>{
		var selectedBefore=this.state.selected
		var i =selectedBefore.indexOf(e)
		if (i != -1){
			selectedBefore.splice(i,1)			
		}else{		selectedBefore.push(e)}

		this.setState({selected: selectedBefore})
	}
  
  
  render()
  { 
    const rowEvents = {
		onClick: (e,row,rowIndex,colIndex) => {
			this.handleSelected(rowIndex)
			alert(row.by)
		},
		bgColor: (row,rowIndex)=>{
			var rowIndex=1
			return 'red'			
			
		}
		}
		
	const selectRow={
		mode:"checkbox",
		clickToSelect: true,
		//selected: this.state.selected,
		bgColor: 'red',
		hideSelectColumn: true
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
      <BootstrapTable keyField={"From","subject"}  selectRow={selectRow} rowEvents={rowEvents} data={eval(this.props.table) } columns={ columns } tdStyle={ { whiteSpace: 'normal'}}/>
      <br/>
      <h3>
      Sum credit
      </h3>
      <br/>  
      <BootstrapTable keyField="1" isKey={true} data={eval(this.props.programTable)} columns={ columns1 } tdStyle={ { whiteSpace: 'normal'}}/>
	  <div>
	  {this.state.selected}
	  </div>
      </div>
    );
  }
}

export default Table;

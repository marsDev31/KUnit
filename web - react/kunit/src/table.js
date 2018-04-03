import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.css';
require('react-bootstrap-table-next/dist/react-bootstrap-table2.min.css');

class Table extends Component {

  render()
  { 
    
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
      text: 'All Subjects'
    },{
      dataField: "2",
      text: 'Credits'
    }]
    return (
      <div>
      <h3>
        Subject you should
      </h3>  
      <br/>
      <BootstrapTable keyField="id" isKey={true} data={eval(this.props.table) } columns={ columns } tdStyle={ { whiteSpace: 'normal'}}/>
      <br/>
      <h3>
        Sum credit
      </h3>
      <br/>  
      <BootstrapTable keyField="id" isKey={true} data={eval(this.props.programTable)} columns={ columns1 } tdStyle={ { whiteSpace: 'normal'}}/>
      
      </div>
    );
  }
}

export default Table;

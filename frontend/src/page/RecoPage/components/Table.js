import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

function activeFormatter(cell, row, extraData) {
  return (
    <button onClick={() => extraData(row)}>추가</button>
  );
}

function deactiveFormatter(cell, row, extraData) {
  return (
    <button onClick={() => extraData(row)}>삭제</button>
  );
}

function urlFormatter(cell, row) {
  return (
    <a href={row.url} target="_blank">{row.subject}</a>
  );
}

function Formatter(cell, row) {
  return (
   <> {row.choosed}/{row.number_of_people}</>
  );
}

function Formatter11(cell, row) {
  if (row.required){
    return(<>O</>)
  }
  return (
   <></>
  );
}

const qualityType = {
  1: 1,
  2: 2,
  3: 3,
  4: 4
};




export default class AllFilters extends React.Component {

  constructor(props) {
    super(props)
    
    this.handlerButton = this.props.handlerButton.bind(this)
    this.RemoveButton = this.props.RemoveButton.bind(this)
    this.lectureSet = this.props.lectureSet.bind(this)
    this.state = {
      full_data: this.props.data.data,
      originData : this.props.data.data,
      myCourse: [],
    }


  }

  handlerClickCleanFiltered() {
    this.refs.name1.cleanFiltered();
    this.refs.name2.cleanFiltered();
    this.refs.quality.cleanFiltered();
    this.refs.price.cleanFiltered();
    this.refs.satisfaction.cleanFiltered();
    this.refs.inStockDate.cleanFiltered();
  }



  render() {
    return (
      <>
        <h3 style={{ textAlign: "center" }}>내가 듣고 싶은 강의</h3>
        <div className="coursetbl">
          <BootstrapTable ref='table' data={this.props.myCourse}>

            <TableHeaderColumn isKey width="13%" dataAlign='center' ref='name1' dataField='dept' >학과/교양</TableHeaderColumn>
            <TableHeaderColumn width="9%" dataAlign='center' ref='name2' dataField='area' >구분</TableHeaderColumn>
            <TableHeaderColumn width="6%" dataAlign='center' ref='quality' dataField='year' >학년</TableHeaderColumn>
            <TableHeaderColumn width="19%" dataAlign='center' dataFormat={urlFormatter} ref='price' dataField='subject' >과목명</TableHeaderColumn>
            <TableHeaderColumn width="4%" dataAlign='center' ref='satisfaction' dataField='required' dataFormat={Formatter11}>전필</TableHeaderColumn>
            <TableHeaderColumn width="10%" dataAlign='center' ref='inStockDate' dataField='professor' >담당 교수</TableHeaderColumn>
            <TableHeaderColumn width="4%" dataAlign='center' ref='inStockDate' dataField='credit'>학점</TableHeaderColumn>
            <TableHeaderColumn width="4%" dataAlign='center' ref='inStockDate' dataField='time'>시간</TableHeaderColumn>
            <TableHeaderColumn width="6%" dataAlign='center' ref='inStockDate' dataField='class_time'>강의 시간</TableHeaderColumn>
            <TableHeaderColumn width="6%" dataAlign='center' ref='inStockDate' dataField='number_of_people' dataFormat={Formatter}>담은/제한 인원</TableHeaderColumn>
            <TableHeaderColumn width="15%" dataAlign='center' ref='inStockDate' dataField='note'>비고</TableHeaderColumn>
            <TableHeaderColumn dataAlign='center' ref='inStockDate' dataFormat={deactiveFormatter} formatExtraData={this.props.RemoveButton} dataField='select'>선택</TableHeaderColumn>
          </BootstrapTable>
        </div>

        <a onClick={this.handlerClickCleanFiltered.bind(this)} style={{ cursor: 'pointer', color: "orange" }} className="atag">clear filters</a>

        <div className="coursetbl" style={{ fontSize: "5pt !important" }}>
          <BootstrapTable ref='table' data={this.props.full_data} pagination>

            <TableHeaderColumn isKey width="13%" dataAlign='center' ref='name1' dataField='dept' filter={{ type: 'TextFilter', placeholder: 'ELLT학과 or 교양' }}>학과/교양

        </TableHeaderColumn>
            <TableHeaderColumn width="9%"  dataAlign='center' ref='name2' dataField='area' filter={{ type: 'SelectFilter', options: this.props.lib }}>구분</TableHeaderColumn>
            <TableHeaderColumn width="6%" dataAlign='center' ref='quality' dataField='year' filter={{ type: 'SelectFilter', options: qualityType, defaultValue: 0, }}>학년</TableHeaderColumn>
            <TableHeaderColumn width="19%" dataAlign='center' ref='price' dataFormat={urlFormatter} dataField='subject' filter={{ type: 'TextFilter', placeholder: 'Please enter a value' }}>과목명</TableHeaderColumn>
            <TableHeaderColumn width="4%" dataAlign='center' ref='satisfaction' dataField='required' dataFormat={Formatter11}>전필</TableHeaderColumn>
            <TableHeaderColumn width="10%" dataAlign='center' ref='inStockDate' dataField='professor' filter={{ type: 'TextFilter', placeholder: 'Please enter a value' }}>담당 교수</TableHeaderColumn>
            <TableHeaderColumn width="4%" dataAlign='center' ref='inStockDate' dataField='credit'>학점</TableHeaderColumn>
            <TableHeaderColumn width="4%" dataAlign='center' ref='inStockDate' dataField='time'>시간</TableHeaderColumn>
            <TableHeaderColumn width="6%" dataAlign='center' ref='inStockDate' dataField='class_time'>강의 시간</TableHeaderColumn>
            <TableHeaderColumn width="6%" dataAlign='center' ref='inStockDate' dataField='number_of_people' dataFormat={Formatter} >담은/제한 인원</TableHeaderColumn>
            <TableHeaderColumn width="15%" dataAlign='center' ref='inStockDate' dataField='note'>비고</TableHeaderColumn>
            <TableHeaderColumn dataAlign='center' ref='inStockDate' dataFormat={activeFormatter} formatExtraData={this.props.handlerButton} dataField='select'>선택</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </>
    );
  }
}
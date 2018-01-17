import React, { Component } from 'react';
//import Textarea from "react-textarea-autosize";
import {Card, Row , Col  , Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import FaClose from 'react-icons/lib/fa/close';
import FaEdit from 'react-icons/lib/fa/edit';
import FaStickyNoteO from 'react-icons/lib/fa/sticky-note-o';
import FaCaretDown from 'react-icons/lib/fa/caret-down';
//import onClickOutside from 'react-onclickoutside';

class InnerBoard extends Component{
  constructor(props){
    super(props);
    this.state={editing:false,
                 dropdownOpen: false,
                 bgColorCard:"#42e5f4",bgColorBody:"#cdf7f3",bgColorIcon:"#1a9cf2"
               }
  }

  toggle=()=>{
     this.setState({
       dropdownOpen: !this.state.dropdownOpen
     });
   }
   yellow=()=>{
       this.setState({bgColorCard:"#f8fc02",bgColorBody:"#ffffdb",bgColorIcon:"#e2db00"});
   }
  pink=()=>{
      this.setState({bgColorCard:"#ff7eb9",bgColorBody:"#ffb7dc",bgColorIcon:"#ff0284"});
  }
  blue=()=>{
  this.setState({bgColorCard:"#42e5f4",bgColorBody:"#cdf7f3",bgColorIcon:"#1a9cf2"});
  }

  green=()=>{
  this.setState({ bgColorCard:"#6EF117",bgColorBody:"#9DFD5D",bgColorIcon:"#3BBF06"});
  }
  red=()=>{
    this.setState({bgColorCard:"#ff9068",bgColorBody:"#ffc3ad",bgColorIcon:"#ff5405"});
  }

  edit=()=>{
    this.setState({editing:true})
  }
  save=() => {
    var val=this.refs.newValue.value;
    console.log(val);
    if(this.refs.newValue.value===''||this.refs.newValue.value.match(/^\s*$/)){
      alert('Write a note to save');
    }
    this.props.updateToBoard(this.refs.newValue.value,this.props.keyOfSticky);
    this.setState({editing:false})
  }

  remove=()=>{
    this.props.removeFromBoard(this.props.keyOfSticky);
    this.setState({editing:false})
  }

  renderForm=()=>{
    return(
      <Row>
      <Col sm="2">
      <Card className="card" style={{backgroundColor:this.state.bgColorCard}}>
      <Row>
      <Col xs={{size:1}}>
      <FaStickyNoteO  size={24} className="icon" style={{color:this.state.bgColorIcon}} onClick={this.save} />
      </Col>
      <Col xs={{size:1,offset:9}}>
     <FaClose size={24} style={{color:this.state.bgColorIcon}} onClick={this.remove} />
     </Col>
     </Row>
     <textarea style={{backgroundColor:this.state.bgColorBody}} className="txt" ref="newValue" defaultValue={this.props.children} />
     <Row>
     <Col xs={{size:1,offset:10}}>
     <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="dropIcon">
        <FaCaretDown size={24} style={{color:this.state.bgColorIcon,backgroundColor:this.state.bgColorCard}}/>
        </DropdownToggle>
        <DropdownMenu className="drop-menu">
          <DropdownItem onClick={this.blue} className="drop-blue">blue</DropdownItem>
          <DropdownItem onClick={this.green} className="drop-green">green</DropdownItem>
          <DropdownItem onClick={this.red} className="drop-red">red</DropdownItem>
            <DropdownItem onClick={this.yellow} className="drop-yellow">yellow</DropdownItem>
          <DropdownItem onClick={this.pink} className="drop-pink">pink</DropdownItem>
        </DropdownMenu>
      </Dropdown>
   </Col>
   </Row>
      </Card>
     </Col>
     </Row>
    );
  }


 renderNormal=()=>{
return(
     <Row>
      <Col sm="2">
      <Card className="sticky-header" style={{backgroundColor:this.state.bgColorCard}} >
      <Row >
     <Col xs={{size:1}} >
     <FaEdit size={24} className="edit-icon" style={{color:this.state.bgColorIcon}} onClick={this.edit}/>
      </Col>
      <Col xs={{size:1,offset:9}}>
     <FaClose size={24} className="close-icon" style={{color:this.state.bgColorIcon}} onClick={this.remove} />
    </Col>
     </Row>
     <div className="sticky-body" style={{backgroundColor:this.state.bgColorBody}}>
     <h1 className="body-note">{this.props.children}</h1>
     </div>
     <Row>
     <Col xs={{size:1,offset:10}}>
     <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className="dropIcon">
        <FaCaretDown size={24}  style={{color:this.state.bgColorIcon,backgroundColor:this.state.bgColorCard}}/>
        </DropdownToggle>
        <DropdownMenu className="drop-menu">
          <DropdownItem onClick={this.blue} className="drop-blue">blue</DropdownItem>
          <DropdownItem onClick={this.green} className="drop-green">green</DropdownItem>
          <DropdownItem onClick={this.red} className="drop-red">red</DropdownItem>
            <DropdownItem onClick={this.yellow} className="drop-yellow">yellow</DropdownItem>
          <DropdownItem onClick={this.pink} className="drop-pink">pink</DropdownItem>
        </DropdownMenu>
      </Dropdown>
   </Col>
   </Row>
    </Card>
    </Col>
    </Row>
  );
}

 render(){
   if(this.state.editing||this.props.children===''){
     return this.renderForm();
   }
   else {
     return this.renderNormal();
   }
 }

}


export default InnerBoard;

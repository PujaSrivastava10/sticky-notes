import React, { Component } from 'react';
import {Card, Row , Col , Button} from 'reactstrap';
import Draggable from 'react-draggable';
import FaClose from 'react-icons/lib/fa/close';
import FaEdit from 'react-icons/lib/fa/edit';
export default class InnerBoard extends Component{
  constructor(props){
    super(props);
    this.state={editing:false}
  }
  edit=()=>{
    this.setState({editing:true})
  }
  save=()=>{
    var val=this.refs.newValue.value;
    if(this.refs.newValue.value===''||val.match(/^\s*$/)){
      alert('Write a note to save');
    }
    this.props.updateToBoard(this.refs.newValue.value,this.props.index);
    this.setState({editing:false})
  }
  remove=()=>{
    this.props.removeFromBoard(this.props.index);
    this.setState({editing:false})
  }
  renderForm=()=>{
    return(

      <Row>
      <Col sm="2" xs="4">
      <Card className="card">
      <Col xs={{size:1,offset:8}}>
     <FaClose size={24} className="close-icon" onClick={this.remove} />
     </Col>
     <textarea className="txt" ref="newValue" defaultValue={this.props.children}/>
      <Row>
      <Col xs="2">
      <Button className="save-btn" onClick={this.save}>Save</Button>
       </Col>
       </Row>
      </Card>
     </Col>
     </Row>

   );
  }
  addText=()=>{
    this.setState({editing:true})
  }

 renderNormal=()=>{
   return(
     <Draggable>
     <Row>
     <Col sm="2" xs="4">
     <Card className="sticky-header">
     <Row >
     <Col xs={{size:1}} >
     <FaEdit size={24} className="edit-icon" onClick={this.edit}/>
      </Col>
      <Col xs={{size:1,offset:6}}>
     <FaClose size={24} className="close-icon" onClick={this.remove} />
    </Col>
     </Row>
     <div className="sticky-body">
    <h1 className="txt">{this.props.children}</h1>
     </div>
    </Card>
    </Col>
    </Row>
  </Draggable>);
 }

 render(){
   if(this.state.editing||this.props.children===''||this.props.children.match(/^\s*$/)){
     return this.renderForm();
   }
   else {
     return this.renderNormal();
   }
 }

}

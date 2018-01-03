import React,{Component} from 'react';
import { Button , Container} from 'reactstrap';
import InnerBoard from './innerBoard.js';

export default class OuterBoard extends Component {
  constructor(props) {
   super(props);
   this.state={board:[]}
  }
   updateText=(newValue,i)=>{
      var arr=this.state.board;
      arr[i]=newValue;
      this.setState({board:arr});
     }
     add=()=>{
       var arr=this.state.board;
       arr.unshift('');
       this.setState({board:arr});
       }
       removeText=(i)=>{
         var arr=this.state.board;
         arr.splice(i,1);
         this.setState({board:arr});
       }
       componentWillMount(){
         localStorage.getItem("board") && this.setState({
           board:JSON.parse(localStorage.getItem("board"))
         })
       }
       componentWillUpdate(nextProps,nextState){
         localStorage.setItem('board',JSON.stringify(nextState.board));
       }

  render(){
    return(
      <body className="body">
      <Button className="btn" onClick={this.add}>Add Sticky-notes</Button>
      {this.state.board.map((text,i)=>
      <InnerBoard updateToBoard={this.updateText} removeFromBoard={this.removeText} index={i} key={i}>{text}</InnerBoard>
      )}
      </body>
    );
  }
}

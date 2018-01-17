import React,{Component} from 'react';
import { Button } from 'reactstrap';
import InnerBoard from './innerBoard.js';




export default class OuterBoard extends Component {
  constructor(props) {
   super(props);
   this.state={
          board:[{key:0,text:'default text'}],
          count:0

        }
  }
   updateText=(newValue,i)=>{
      var arr=[...this.state.board];
      arr[i]=newValue;
      this.setState({board:arr});
     }
     add=()=>{
       var arr=this.state.board;
       //var counter=this.state.count;
       arr.push('');
       this.setState({board:arr});
       //console.log(this.state.board[0].text);
       //console.log(this.state.keySticky);
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
        // ? localStorage.setItem('keySticky',JSON.stringify(nextState.keySticky));
       }

  render(){
    return(

      <div className="body">
      <Button className="btn-add-sticky" onClick={this.add}>Add Sticky-notes</Button>
      <div className="rowing">
      {(this.state.board).map((text,i)=>
      <InnerBoard className="innerBoard"
       updateToBoard={this.updateText}
        removeFromBoard={this.removeText}
        key={i}
        keyOfSticky={i}
       >{text}
       </InnerBoard>)}
       </div>
      </div>

    );
  }
}

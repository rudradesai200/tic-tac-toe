import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

var player = 0;
var reset = 0;

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      idx : props.idx,
      sign: props.sign,
    }
    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress = () => {
    if(this.state.sign !== '') return;
    let history_el = document.createElement("li");
    history_el.innerHTML = ("Player " + player + " pressed button " + this.state.idx);
    history_el.classList.add("player-"+player);
    $("#history").append(history_el)
    $("#button-"+this.state.idx).addClass("cannotuse")
    // $("#button-"+this.state.idx).off(Event("click"))
  }

  render(){
    return (
      <div class="square">
        <input type="button" class="square-button" id={"button-" + this.state.idx} onClick={
          (e)=>{
            this.buttonPress();
            this.props.onClick();
          }} value={this.props.sign} />
      </div>
    );
  }
}

class Board extends React.Component {
  constructor() {
    super();
    const squares = []
    for(let i=0; i<9; i++){
      squares.push('');
    }
    this.state = { squares }
    this.UpdateBoard = this.UpdateBoard.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
    this.ModifyBoard = this.ModifyBoard.bind(this);
    this.FetchBoard = {0: this.UpdateBoard, 1: this.resetBoard};
  }

  checkBoard = (squares) => {
    let printwinner = (v) => {
      let player = (v === 'O') ? "Player 0" : "Player 1";
      let winner = document.createElement("h2");
      winner.innerHTML = (player + " Won!!");
      $("#winner").append(winner);
      reset = 1;
      return ;
    }
    let printtie = () => {
      let winner = document.createElement("h2");
      winner.innerHTML = ("It's a tie!!");
      $("#winner").append(winner);
      reset = 1;
      return ;
    }

    let checkSeq = (v1, v2, v3) => {
      if(v1 === v2 && v2 === v3 && v1 !== '') printwinner(v1);
    }
    for(let i=0; i<3; i++){
      checkSeq(squares[3*i],squares[3*i+1],squares[3*i+2]);
      checkSeq(squares[i],squares[i + 3],squares[i + 6]);
    }
    checkSeq(squares[0],squares[4],squares[8]);
    checkSeq(squares[2],squares[4],squares[6]);
    let non_empty = squares.filter(n => n !== '').length;
    if(non_empty === 9) printtie();
    return ;
  }

  resetBoard = () => {
    const squares = []
    for(let i=0; i<9; i++){
      squares.push('');
      $("#button-"+i).removeClass("cannotuse");
    }
    this.setState({squares: squares});
    $("#history").html("");
    $("#winner").html("");
    player = 0;
    reset = 0;
  }

  UpdateBoard = (idx) => {
    let squares = this.state.squares.slice();
    if(squares[idx] !== '') return;
    const sign = (player === 0) ? 'O' : 'X';
    squares[idx] = sign;
    this.setState({squares: squares});
    this.checkBoard(squares);
    $("#button-"+idx).addClass("player-"+player);
    player = (player + 1)%2;
  }

  ModifyBoard = (idx) => {
    this.FetchBoard[reset](idx);
  }

  renderSquare = (idx) => {
    var passele;
    if(this.state.squares[idx] !== ''){
      passele = <td class="board-cell">{<Square idx={idx}  onClick={() => this.ModifyBoard(idx)} sign={this.state.squares[idx]} />}</td>;
    }
    else{
      passele = <td class="board-cell">{<Square idx={idx}  onClick={() => this.ModifyBoard(idx)} sign='' />}</td>
    }
    return passele
  }

  render(){
    return (
      <div>
        <div id="Board" class="container">
          <div class="row">
            <div class="col-9">
              <table class="board-table center">
              <tbody>
              <tr class="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </tr>
              <tr class="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </tr>
              <tr class="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </tr>
              </tbody>
              </table>
              <button id="restart" class="btn-green" onClick={this.resetBoard}>Restart</button>
            </div>
            <div class="col-3">
              <div class="row">
              <h3 class="center">History</h3>
              <ol id="history"></ol>
              </div>
              <div class="row">
              <div class="col" id="winner">
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Board />,
  document.getElementById("root")
);


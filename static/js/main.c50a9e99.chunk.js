(this["webpackJsonpTic-Tac-Toe"]=this["webpackJsonpTic-Tac-Toe"]||[]).push([[0],{13:function(e,t,r){"use strict";r.r(t);var s=r(6),n=r(7),a=r(2),c=r(9),i=r(8),d=(r(14),r(15),r(1)),o=r.n(d),l=r(3),u=r.n(l),b=r(12),j=r.n(b),h=(r(41),r(0)),O=0,f=0,x=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).buttonPress=function(){if(""===n.state.sign){var e=document.createElement("li");e.innerHTML="Player "+O+" pressed button "+n.state.idx,e.classList.add("player-"+O),o()("#history").append(e),o()("#button-"+n.state.idx).addClass("cannotuse")}},n.state={idx:e.idx,sign:e.sign},n.buttonPress=n.buttonPress.bind(Object(a.a)(n)),n}return Object(n.a)(r,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{class:"square",children:Object(h.jsx)("input",{type:"button",class:"square-button",id:"button-"+this.state.idx,onClick:function(t){e.buttonPress(),e.props.onClick()},value:this.props.sign})})}}]),r}(u.a.Component),p=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(){var e;Object(s.a)(this,r),(e=t.call(this)).checkBoard=function(e){for(var t=function(e,t,r){e===t&&t===r&&""!==e&&function(e){var t="O"===e?"Player 0":"Player 1",r=document.createElement("h2");r.innerHTML=t+" Won!!",o()("#winner").append(r),f=1}(e)},r=0;r<3;r++)t(e[3*r],e[3*r+1],e[3*r+2]),t(e[r],e[r+3],e[r+6]);t(e[0],e[4],e[8]),t(e[2],e[4],e[6]),9==e.filter((function(e){return""!==e})).length&&function(){var e=document.createElement("h2");e.innerHTML="It's a tie!!",o()("#winner").append(e),f=1}()},e.resetBoard=function(){for(var t=[],r=0;r<9;r++)t.push(""),o()("#button-"+r).removeClass("cannotuse");e.setState({squares:t}),o()("#history").html(""),o()("#winner").html(""),O=0,f=0},e.UpdateBoard=function(t){var r=e.state.squares.slice();if(""===r[t]){var s=0===O?"O":"X";r[t]=s,e.setState({squares:r}),e.checkBoard(r),o()("#button-"+t).addClass("player-"+O),O=(O+1)%2}},e.ModifyBoard=function(t){e.FetchBoard[f](t)},e.renderSquare=function(t){return""!==e.state.squares[t]?Object(h.jsx)("td",{class:"board-cell",children:Object(h.jsx)(x,{idx:t,onClick:function(){return e.ModifyBoard(t)},sign:e.state.squares[t]})}):Object(h.jsx)("td",{class:"board-cell",children:Object(h.jsx)(x,{idx:t,onClick:function(){return e.ModifyBoard(t)},sign:""})})};for(var n=[],c=0;c<9;c++)n.push("");return e.state={squares:n},e.UpdateBoard=e.UpdateBoard.bind(Object(a.a)(e)),e.resetBoard=e.resetBoard.bind(Object(a.a)(e)),e.ModifyBoard=e.ModifyBoard.bind(Object(a.a)(e)),e.FetchBoard={0:e.UpdateBoard,1:e.resetBoard},e}return Object(n.a)(r,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("div",{id:"Board",class:"container",children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsxs)("div",{class:"col-9",children:[Object(h.jsx)("table",{class:"board-table center",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{class:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(h.jsxs)("tr",{class:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(h.jsxs)("tr",{class:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}),Object(h.jsx)("button",{id:"restart",class:"btn-green",onClick:this.resetBoard,children:"Restart"})]}),Object(h.jsxs)("div",{class:"col-3",children:[Object(h.jsxs)("div",{class:"row",children:[Object(h.jsx)("h3",{class:"center",children:"History"}),Object(h.jsx)("ol",{id:"history"})]}),Object(h.jsx)("div",{class:"row",children:Object(h.jsx)("div",{class:"col",id:"winner"})})]})]})})})}}]),r}(u.a.Component);j.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))},41:function(e,t,r){}},[[13,1,2]]]);
//# sourceMappingURL=main.c50a9e99.chunk.js.map
(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,a,e){t.exports={history:"TransactionHistory_history__3T0WM",transaction__head:"TransactionHistory_transaction__head__YaWb7",transaction__item:"TransactionHistory_transaction__item__JdTfM"}},16:function(t,a,e){},21:function(t,a,e){t.exports=e(41)},26:function(t,a,e){},27:function(t,a,e){},3:function(t,a,e){t.exports={controls:"Controls_controls__3NPwc",controls__input:"Controls_controls__input__27ZZG",controls__button:"Controls_controls__button__33LmI"}},41:function(t,a,e){"use strict";e.r(a);var n=e(1),c=e.n(n),r=e(2),o=e.n(r),l=(e(26),e(27),e(20)),s=e(7),i=e(8),u=e(10),m=e(9),_=e(11),b=e(16),d=e.n(b),p=e(17),h=e.n(p),f=e(13),E=e(3),y=e.n(E);e(36);f.a.configure();var v=function(t){function a(){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this))).handleChange=function(a){t.setState({input:a.target.value})},t.handleClick=function(a){var e=t.props,n=e.handleTransaction,c=e.balance,r=t.state.input,o=Number(r),l=(new Date).toLocaleString(),s={id:h.a.generate(),type:a.target.name,amount:o,date:l};return"0"===r||""===r||Number(r)<=0?(Object(f.a)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"),void t.reset()):r>c&&"withdrawal"===s.type?(Object(f.a)("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!"),void t.reset()):(n(s),void t.reset())},t.reset=function(){t.setState({input:""})},t.state={input:""},t}return Object(_.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){var t=this.state.input;return c.a.createElement("section",{className:y.a.controls},c.a.createElement("input",{type:"number",name:"balance",value:t,onChange:this.handleChange,className:y.a.controls__input}),c.a.createElement("button",{type:"button",name:"deposit",onClick:this.handleClick,className:y.a.controls__button},"Deposit"),c.a.createElement("button",{type:"button",name:"withdrawal",onClick:this.handleClick,className:y.a.controls__button},"Withdraw"))}}]),a}(n.Component),w=e(5),N=e.n(w),j=function(t){var a=t.transactions,e=t.balance,n=function(t){return a.filter((function(a){return a.type===t})).reduce((function(t,a){return Number(a.amount)+Number(t)}),0)};return c.a.createElement("section",{className:N.a.balance},c.a.createElement("span",{role:"img","aria-label":"deposit",className:N.a.balance__text},"\u2b06\ufe0f",n("deposit"),"$"),c.a.createElement("span",{role:"img","aria-label":"withdrawal",className:N.a.balance__text},"\u2b07\ufe0f",n("withdrawal"),"$"),c.a.createElement("span",{className:N.a.balance__text},"Balance: ",e,"$"))},C=e(12),O=e.n(C),g=function(t){var a=t.transactions,e=void 0===a?[]:a;return c.a.createElement("table",{className:O.a.history},c.a.createElement("thead",{className:O.a.transaction__head},c.a.createElement("tr",null,c.a.createElement("th",null,"Transaction"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Date"))),c.a.createElement("tbody",{className:O.a.transaction__item},e.map((function(t){return c.a.createElement("tr",{key:t.id},c.a.createElement("td",null,t.type),c.a.createElement("td",null,t.amount),c.a.createElement("td",null,t.date))}))))},k=function(t){function a(){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this))).handleTransaction=function(a){t.setState((function(t){return{transactions:[].concat(Object(l.a)(t.transactions),[a]),balance:"withdrawal"===a.type?t.balance-a.amount:t.balance+a.amount}}))},t.state={transactions:[],balance:0},t}return Object(_.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){var t=this.state,a=t.transactions,e=t.balance;return c.a.createElement("div",{className:d.a.dashboard},c.a.createElement(v,{handleTransaction:this.handleTransaction,balance:e}),c.a.createElement(j,{transactions:a,balance:e}),c.a.createElement(g,{transactions:a}))}}]),a}(n.Component),T=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(k,null))};o.a.render(c.a.createElement(T,null),document.getElementById("root"))},5:function(t,a,e){t.exports={balance:"Balance_balance__2vsKK",balance__text:"Balance_balance__text__2blyd"}}},[[21,1,2]]]);
//# sourceMappingURL=main.14223a3d.chunk.js.map
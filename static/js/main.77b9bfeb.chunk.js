(this.webpackJsonptrello=this.webpackJsonptrello||[]).push([[0],{80:function(e,t,a){e.exports=a(90)},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),l=a(18),s=a(9),o=a(57),d=a(16),u=a(139),m=a(127),b=a(131),p=a(122),f=a(74),O=a(126),g=a(70),j=a.n(g),v=r.a.createContext(null),E=Object(p.a)((function(e){return{editableTitleContainer:{margin:e.spacing(1),display:"flex"},editableTitle:{flexGrow:1,fontSize:"1.2rem",fontWeight:"bold"},input:{fontSize:"1.2rem",fontWeight:"bold",margin:e.spacing(1),"&:focus":{background:"#ddd"}}}}));function C(e){var t=e.title,a=e.listId,i=Object(n.useState)(!1),c=Object(d.a)(i,2),l=c[0],s=c[1],o=Object(n.useState)(t),u=Object(d.a)(o,2),m=u[0],b=u[1],p=Object(n.useContext)(v).updateListTitle,g=E();return r.a.createElement("div",null,l?r.a.createElement("div",null,r.a.createElement(f.a,{onChange:function(e){b(e.target.value)},autoFocus:!0,value:m,inputProps:{className:g.input},fullWidth:!0,onBlur:function(){p(m,a),s(!1)}})):r.a.createElement("div",{className:g.editableTitleContainer},r.a.createElement(O.a,{onClick:function(){return s(!l)},className:g.editableTitle},t),r.a.createElement(j.a,null)))}var h=a(30),x=Object(p.a)((function(e){return{card:{padding:e.spacing(1,1,1,2),margin:e.spacing(1)}}}));function k(e){var t=e.card,a=e.index,n=x();return r.a.createElement(h.b,{draggableId:t.id,index:a},(function(e){return r.a.createElement("div",Object.assign({ref:e.innerRef},e.dragHandleProps,e.draggableProps),r.a.createElement(m.a,{className:n.card},t.title))}))}var I=a(130),N=a(12),y=a(128),w=a(129),S=a(54),A=a.n(S),P=Object(p.a)((function(e){return{card:{width:"280px",margin:e.spacing(0,1,1,1),paddingBottom:e.spacing(4)},input:{margin:e.spacing(1)},btnConfirm:{background:"#5AAC44",color:"#fff","&:hover":{background:Object(N.c)("#5AAC44",.75)}},confirm:{margin:e.spacing(0,1,1,1)}}}));function T(e){var t=e.setOpen,a=e.listId,i=e.type,c=P(),l=Object(n.useContext)(v),s=l.addMoreCard,o=l.addMoreList,u=Object(n.useState)(""),b=Object(d.a)(u,2),p=b[0],O=b[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m.a,{className:c.card},r.a.createElement(f.a,{onChange:function(e){O(e.target.value)},multiline:!0,onBlur:function(){return t(!1)},fullWidth:!0,inputProps:{className:c.input},value:p,placeholder:"card"===i?"Enter a title of this card..":"Enter list title..."}))),r.a.createElement("div",{className:c.confirm},r.a.createElement(y.a,{className:c.btnConfirm,onClick:function(){"card"===i?(s(p,a),O(""),t(!1)):(o(p),O(""),t(!1))}},"card"===i?"Add Card":"Add List"),r.a.createElement(w.a,{onClick:function(){return t(!1)}},r.a.createElement(A.a,null))))}var W=Object(p.a)((function(e){return{root:{width:"300px",marginTop:e.spacing(1)},addCard:{padding:e.spacing(1,1,1,2),margin:e.spacing(0,1,1,1),background:"#EBECF0","&:hover":{backgroundColor:Object(N.c)("#000",.25)}}}}));function B(e){var t=e.listId,a=e.type,i=W(),c=Object(n.useState)(!1),l=Object(d.a)(c,2),s=l[0],o=l[1];return r.a.createElement("div",{className:i.root},r.a.createElement(I.a,{in:s},r.a.createElement(T,{setOpen:o,listId:t,type:a})),r.a.createElement(I.a,{in:!s},r.a.createElement(m.a,{className:i.addCard,elevation:0,onClick:function(){return o(!s)}},r.a.createElement(O.a,null,"card"===a?"+ Add a Card":"+ Add another List"))))}var L=Object(p.a)((function(e){return{root:{minWidth:"300px",backgroundColor:"#EBECF0",marginLeft:e.spacing(1)},cardContainer:{marginTop:e.spacing(4)}}}));function F(e){var t=e.list,a=e.index,n=L();return r.a.createElement(h.b,{draggableId:t.id,index:a},(function(e){return r.a.createElement("div",Object.assign({},e.draggableProps,{ref:e.innerRef}),r.a.createElement(m.a,Object.assign({className:n.root},e.dragHandleProps),r.a.createElement(b.a,null),r.a.createElement(C,{title:t.title,listId:t.id}),r.a.createElement(h.c,{droppableId:t.id},(function(e){return r.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps,{className:n.cardContainer}),t.cards.map((function(e,t){return r.a.createElement(k,{key:e.id,card:e,index:t})})),e.placeholder)})),r.a.createElement(B,{listId:t.id,type:"card"})))}))}var z={lists:{"list-1":{id:"list-1",title:"Todo",cards:[{id:"card-1",title:"Create a Kanban board"},{id:"card-2",title:"Add a card"},{id:"card-3",title:"Add Drag and Drop"},{id:"card-4",title:"Add a list"},{id:"card-5",title:"Add a Filters"}]},"list-2":{id:"list-2",title:"In Progress",cards:[]},"list-3":{id:"list-3",title:"Done",cards:[]}},listIds:["list-1","list-2","list-3"]},M=Object(p.a)((function(e){return{root:{display:"flex",alignItems:"center",margin:e.spacing(2)},title:{fontSize:"1.2rem",fontWeight:"bold",flexGrow:1},btn:{color:"#fff",background:"hsla(0,0%,100%,.24)"}}}));function D(e){var t=e.setOpen,a=M();return r.a.createElement("div",{className:a.root},r.a.createElement(O.a,{className:a.title},"Trello Board"),r.a.createElement(y.a,{className:a.btn,onClick:function(){return t(!0)}},"Filters"))}var R=a(138),H=a(132),G=a(140),J=a(135),U=a(142),K=a(136),Y=a(143),$=Object(p.a)((function(e){return{drawerPaper:{width:"400px"},title:{fontSize:"1.2rem",fontWeight:"bold"},titleContainer:{marginTop:e.spacing(2),display:"flex",justifyContent:"space-around",marginBottom:e.spacing(2)},menuContainer:{display:"flex",justifyContent:"space-around",flexWrap:"wrap",margin:e.spacing(2)}}}));function q(e){var t=e.setOpen,a=e.open,i=e.data,c=e.filterUpdated,o=e.filters,u=e.setFilter,m=$(),b=Object(n.useState)([]),p=Object(d.a)(b,2),f=p[0],g=p[1];Object(n.useEffect)((function(){var e=Object.keys(i.lists).map((function(e){return i.lists[e]}));g(e)}),[i]);var j=function(e,t){u(Object(s.a)(Object(s.a)({},o),{},Object(l.a)({},t,e))),c(Object(s.a)(Object(s.a)({},o),{},Object(l.a)({},t,e)))};return r.a.createElement(R.a,{open:a,onClose:function(){return t(!a)},anchor:"right",classes:{paper:m.drawerPaper}},r.a.createElement("div",{className:m.titleContainer},r.a.createElement(O.a,{className:m.title}," Filters"),r.a.createElement(A.a,{onClick:function(){return t(!a)}})),r.a.createElement(H.a,null),r.a.createElement("div",{className:m.menuContainer},r.a.createElement(G.a,{style:{width:"100%"},value:o.name,onChange:function(e){return j(e.target.value,"name")},placeholder:"Name",label:"Name"}),r.a.createElement(J.a,{fullWidth:!0},r.a.createElement(U.a,null,"Status"),r.a.createElement(K.a,{value:o.status,label:"Status",onChange:function(e){return j(e.target.value,"status")}},r.a.createElement(Y.a,{value:""},"None"),f.map((function(e){return r.a.createElement(Y.a,{key:e.id,value:e.id},e.title)}))))))}var Q=Object(p.a)((function(e){return{root:{minHeight:"100vh",background:"rgb(0, 121, 191)",width:"100%",overflowY:"auto"},listContainer:{display:"flex"}}}));function V(){var e=Object(n.useState)(z),t=Object(d.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(z),m=Object(d.a)(c,2),b=m[0],p=m[1],f=Object(n.useState)(!1),O=Object(d.a)(f,2),g=O[0],j=O[1],E=Object(n.useState)({name:"",status:""}),C=Object(d.a)(E,2),x=C[0],k=C[1],I=Q();Object(n.useEffect)((function(){N(x)}),[a]);var N=function(e){var t=Object.keys(a.lists).map((function(e){return a.lists[e]})),n=t;e.name?n=t.map((function(t){var a=t.cards.filter((function(a){return a.title.toLowerCase().includes(e.name.toLowerCase())&&(!e.status||e.status===t.id)}));return Object(s.a)(Object(s.a)({},t),{},{cards:a})})):!e.name&&e.status&&(n=t.map((function(t){return t.id!==e.status?Object(s.a)(Object(s.a)({},t),{},{cards:[]}):t})));var r=Object(s.a)(Object(s.a)({},a),{},{lists:n.reduce((function(e,t){return Object(s.a)(Object(s.a)({},e),{},Object(l.a)({},t.id,t))}),{})});p(r)};return r.a.createElement(v.Provider,{value:{addMoreCard:function(e,t){console.log(e,t);var n={id:Object(u.a)(),title:e},r=a.lists[t];r.cards=[].concat(Object(o.a)(r.cards),[n]);var c=Object(s.a)(Object(s.a)({},a),{},{lists:Object(s.a)(Object(s.a)({},a.lists),{},Object(l.a)({},t,r))});i(c)},addMoreList:function(e){var t=Object(u.a)(),n={id:t,title:e,cards:[]},r={listIds:[].concat(Object(o.a)(a.listIds),[t]),lists:Object(s.a)(Object(s.a)({},a.lists),{},Object(l.a)({},t,n))};i(r)},updateListTitle:function(e,t){var n=a.lists[t];n.title=e;var r=Object(s.a)(Object(s.a)({},a),{},{lists:Object(s.a)(Object(s.a)({},a.lists),{},Object(l.a)({},t,n))});i(r)}}},r.a.createElement("div",{className:I.root},r.a.createElement(D,{setOpen:j}),r.a.createElement(h.a,{onDragEnd:function(e){var t=e.destination,n=e.source,r=e.draggableId,c=e.type;if(t){if("list"===c){var o=a.listIds;return o.splice(n.index,1),void o.splice(t.index,0,r)}var d=a.lists[n.droppableId],u=a.lists[t.droppableId],m=d.cards.filter((function(e){return e.id===r}))[0];if(n.droppableId===t.droppableId){d.cards.splice(n.index,1),u.cards.splice(t.index,0,m);var b=Object(s.a)(Object(s.a)({},a),{},{lists:Object(s.a)(Object(s.a)({},a.lists),{},Object(l.a)({},d.id,u))});i(b)}else{var p;d.cards.splice(n.index,1),u.cards.splice(t.index,0,m);var f=Object(s.a)(Object(s.a)({},a),{},{lists:Object(s.a)(Object(s.a)({},a.lists),{},(p={},Object(l.a)(p,d.id,d),Object(l.a)(p,u.id,u),p))});i(f)}}}},r.a.createElement(h.c,{droppableId:"app",type:"list",direction:"horizontal"},(function(e){return r.a.createElement("div",Object.assign({className:I.listContainer,ref:e.innerRef},e.droppableProps),b.listIds.map((function(e,t){var a=b.lists[e];return r.a.createElement(F,{list:a,key:e,index:t})})),r.a.createElement(B,{type:"list"}),e.placeholder)}))),r.a.createElement(q,{open:g,setOpen:j,data:a,filterUpdated:N,filters:x,setFilter:k})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[80,1,2]]]);
//# sourceMappingURL=main.77b9bfeb.chunk.js.map
(this["webpackJsonphooks-app"]=this["webpackJsonphooks-app"]||[]).push([[0],{25:function(e,t,a){e.exports=a(36)},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(21),r=a.n(l),o=a(24),s=a(22),i=a(6),u=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),u=Object(i.a)(r,2),m=u[0],d=u[1];Object(n.useEffect)((function(){var e=function(e){if(0===e.length)return"Sorry, this doesn't like to anybody!";var t,a,n,c;switch(e.length){case 1:return t=Object(i.a)(e,1)[0],"".concat(t," likes this!");case 2:var l=Object(i.a)(e,2);return t=l[0],a=l[1],"".concat(t," and ").concat(a," like this!");case 3:var r=Object(i.a)(e,3);return t=r[0],a=r[1],n=r[2],"".concat(t,", ").concat(a," and ").concat(n," like this!");default:var o=Object(s.a)(e);return t=o[0],a=o[1],c=o.slice(2),"".concat(t,", ").concat(a," and ").concat(c.length," others like this!")}}(a);d(e)}),[a]);return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card border-info mb-3",style:{maxWidth:"18rem"}},c.a.createElement("div",{className:"card-header"},"Comments"),c.a.createElement("div",{className:"card-body text-info"},c.a.createElement("h5",{className:"card-title"},"Likes with react hooks"),c.a.createElement("p",{className:"card-text"},"With this app you can learn how make react useState hook functionality, this counter likes can be shown seem to twitter likes."),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-2"},c.a.createElement("i",{name:"like",onClick:function(e){var t=function(){var e=["Juan","Pedro","Josefa","Ram\xf3n","Penelope","Alexander","Manolo","Carmen"];return e[Math.floor(Math.random()*e.length)]}();a.includes(t)||l([].concat(Object(o.a)(a),[t]))},className:"btn btn-outline-info fas fa-heart"})),c.a.createElement("div",{className:"col-sm ml-1"},c.a.createElement("span",null," ",m))))))},m=a(9),d=c.a.createContext({}),h=a(1),b=function(){var e=Object(h.f)(),t=Object(n.useContext)(d),a=t.user,l=t.setuser,r={email:"manolorodriguez@gmail.com",logged:!0,userName:"Manolo69"};return c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(t){0===Object.entries(a).length?l(r):a.logged?console.log("User was logged"):l(Object(m.a)(Object(m.a)({},a),{},{logged:!0})),e.push("/board")}}," Login"))},E=function(){var e=Object(n.useContext)(d).user;return c.a.createElement("div",null,c.a.createElement("h1",null," Hola! ",e.email," "))},f=function(){var e=Object(n.useContext)(d),t=e.user,a=e.setuser,l=Object(h.f)();0===Object.entries(t).length&&l.push("/");return c.a.createElement("div",null,c.a.createElement(E,null),c.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(e){a(Object(m.a)(Object(m.a)({},t),{},{logged:!1})),l.push("/")}}," Logout"))},v=a(12),j=function(){return c.a.createElement(v.a,null,c.a.createElement("div",null,c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:b}),c.a.createElement(h.a,{exact:!0,path:"/board",component:f}))))},p=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],l=t[1];return c.a.createElement(d.Provider,{value:{user:a,setuser:l}},c.a.createElement(j,null))};a(35);r.a.render(c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Learning about hooks in react"),c.a.createElement("hr",null),c.a.createElement("div",null,c.a.createElement("h3",null," Project #1 100daysofcode: Comments likes with react useState and useEffect hooks"),c.a.createElement("hr",null),c.a.createElement(u,null)),c.a.createElement("div",null,c.a.createElement("h3",null," Project #2 100daysofcode: Simple login with router-dom, useState, useContext, useHistory hooks in react"),c.a.createElement("hr",null),c.a.createElement(p,null))),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.208bba66.chunk.js.map
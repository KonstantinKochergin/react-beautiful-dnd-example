(this["webpackJsonpreact-beautiful-dnd-example"]=this["webpackJsonpreact-beautiful-dnd-example"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),i=n(3),s=n.n(i),d=(n(19),n(5)),o=n(13),l=(n(20),n(2)),u=(n(21),function(e){var t=e.text,n=e.refProp,a=e.draggableProps,c=e.dragHandleProps;return Object(r.jsx)("li",Object(l.a)(Object(l.a)(Object(l.a)({className:"list-item",ref:n},a),c),{},{children:t}))}),j=function(e){var t=e.items.map((function(e){var t=e.id,n=e.text;return Object(r.jsx)(u,{text:n},t)}));return Object(r.jsx)("ul",{className:"list",children:t})},b=n(7),x=function(e){var t=e.items,n=Object(a.useState)(t),c=Object(d.a)(n,2),i=c[0],s=c[1],o=i.map((function(e,t){var n=e.id,a=e.text;return Object(r.jsx)(b.b,{draggableId:""+n,index:t,children:function(e){return Object(r.jsx)(u,{text:a,draggableProps:e.draggableProps,dragHandleProps:e.dragHandleProps,refProp:e.innerRef})}},n)}));return Object(r.jsx)(b.a,{onDragEnd:function(e){if(e.destination){var t=Array.from(i),n=t.splice(e.source.index,1),r=Object(d.a)(n,1)[0];t.splice(e.destination.index,0,r),s(t)}},children:Object(r.jsx)(b.c,{droppableId:"cases",children:function(e){return Object(r.jsxs)("ul",Object(l.a)(Object(l.a)({className:"list"},e.droppableProps),{},{ref:e.innerRef,children:[o,e.placeholder]}))}})})},f=[{id:0,text:"\u0418\u043c\u0435\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0434\u0435\u0436"},{id:1,text:"\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0434\u0435\u0436"},{id:2,text:"\u0414\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0434\u0435\u0436"},{id:3,text:"\u0412\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0434\u0435\u0436"},{id:4,text:"\u0422\u0432\u043e\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0434\u0435\u0436"},{id:5,text:"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u043d\u044b\u0439 \u043f\u0430\u0434\u0435\u0436"}];var p=function(){var e=Object(a.useState)([{id:0,text:"\u041a\u0442\u043e? \u0427\u0442\u043e?"},{id:1,text:"\u041a\u043e\u0433\u043e? \u0427\u0435\u0433\u043e?"},{id:2,text:"\u041a\u043e\u043c\u0443? \u0427\u0435\u043c\u0443?"},{id:3,text:"\u041a\u043e\u0433\u043e? \u0427\u0442\u043e?"},{id:4,text:"\u041a\u0435\u043c? \u0427\u0435\u043c?"},{id:5,text:"(\u043e) \u043a\u043e\u043c? (\u043e) \u0447\u0435\u043c?"}]),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return Object(o.a)(e)}(n);c(e)}),[]),Object(r.jsx)("div",{className:"app",children:Object(r.jsxs)("div",{className:"lists-container",children:[Object(r.jsx)(j,{items:f}),Object(r.jsx)(x,{items:n})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),O()}},[[28,1,2]]]);
//# sourceMappingURL=main.5f7200bd.chunk.js.map